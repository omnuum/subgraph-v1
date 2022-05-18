import { EventName, getEventName } from '../modules/event';
import { Contract } from '../types/schema';
import { OmnuumNFT721 as NftTemplate } from '../types/templates';
import { OmnuumNFT721 as NftContract } from '../types/templates/OmnuumNFT721/OmnuumNFT721';
import { getLogMsg, logging, LogMsg } from '../utils/logger';
import { saveTransaction } from '../modules/transaction';
import { getContractTopic } from '../modules/topic';
import { BigInt } from '@graphprotocol/graph-ts';
import { NftContractDeployed } from '../types/NftFactory/NftFactory';
import { OwnershipTransferred } from '../types/OmnuumCAManager/OmnuumCAManager';
import { ownershipTransfer } from '../modules/ownership';

export function handleNftContractDeployed(event: NftContractDeployed): void {
  const nftAddress = event.params.nftContract.toHexString();
  const eventName = getEventName(EventName.NftContractDeployed);
  const creator = event.params.creator.toHexString();

  let contractEntity = Contract.load(nftAddress);
  if (!contractEntity) {
    contractEntity = new Contract(nftAddress);

    // Initiating data source NFT template dynamically to start indexing since this block
    NftTemplate.create(event.params.nftContract);

    logging(getLogMsg(LogMsg.___NFT_DEPLOYED), eventName, nftAddress, '');

    contractEntity.collection_id = event.params.collectionId.toString();
  }

  const transactionEntity = saveTransaction(event, getContractTopic(event.address), eventName);
  contractEntity.block_number = transactionEntity.block_number;
  contractEntity.transaction = transactionEntity.id;
  contractEntity.owner = creator;
  contractEntity.topic = 'NFT';
  contractEntity.is_removed = false;
  contractEntity.is_revealed = false;
  contractEntity.is_owner_changed = false;
  contractEntity.total_minted_amount = BigInt.zero().toI32();
  contractEntity.total_transferred_amount = BigInt.zero().toI32();
  contractEntity.total_burned_amount = BigInt.zero().toI32();
  contractEntity.profit = BigInt.zero();
  contractEntity.fee_paid = BigInt.zero();
  contractEntity.withdrawal = BigInt.zero();

  // Interaction with the NFT contract for max supply, cover uri.
  const nftContract = NftContract.bind(event.params.nftContract);

  const maxSupply = nftContract.try_maxSupply();
  if (maxSupply.reverted) {
    logging(getLogMsg(LogMsg.___CALL_REVERTED), eventName, nftAddress, '@query maxSupply');
  } else {
    contractEntity.max_supply = maxSupply.value.toI32();
  }

  const coverUri = nftContract.try_baseURI();
  if (coverUri.reverted) {
    logging(getLogMsg(LogMsg.___CALL_REVERTED), eventName, nftAddress, '@query coverUri');
  } else {
    contractEntity.base_uri = contractEntity.cover_uri = coverUri.value;
  }

  const name = nftContract.try_name();
  if (name.reverted) {
    logging(getLogMsg(LogMsg.___CALL_REVERTED), eventName, nftAddress, '@query name');
  } else {
    contractEntity.name = name.value;
  }

  const symbol = nftContract.try_symbol();
  if (name.reverted) {
    logging(getLogMsg(LogMsg.___CALL_REVERTED), eventName, nftAddress, '@query symbol');
  } else {
    contractEntity.symbol = symbol.value;
  }

  contractEntity.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  ownershipTransfer(event);
}
