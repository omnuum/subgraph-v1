// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class BalanceTransferred extends ethereum.Event {
  get params(): BalanceTransferred__Params {
    return new BalanceTransferred__Params(this);
  }
}

export class BalanceTransferred__Params {
  _event: BalanceTransferred;

  constructor(event: BalanceTransferred) {
    this._event = event;
  }

  get receiver(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class BaseURIChanged extends ethereum.Event {
  get params(): BaseURIChanged__Params {
    return new BaseURIChanged__Params(this);
  }
}

export class BaseURIChanged__Params {
  _event: BaseURIChanged;

  constructor(event: BaseURIChanged) {
    this._event = event;
  }

  get nftContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get baseURI(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class EtherReceived extends ethereum.Event {
  get params(): EtherReceived__Params {
    return new EtherReceived__Params(this);
  }
}

export class EtherReceived__Params {
  _event: EtherReceived;

  constructor(event: EtherReceived) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class MintFeePaid extends ethereum.Event {
  get params(): MintFeePaid__Params {
    return new MintFeePaid__Params(this);
  }
}

export class MintFeePaid__Params {
  _event: MintFeePaid;

  constructor(event: MintFeePaid) {
    this._event = event;
  }

  get nftContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get payer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get profit(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get mintFee(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Revealed extends ethereum.Event {
  get params(): Revealed__Params {
    return new Revealed__Params(this);
  }
}

export class Revealed__Params {
  _event: Revealed;

  constructor(event: Revealed) {
    this._event = event;
  }

  get nftContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class OmnuumNFT721 extends ethereum.SmartContract {
  static bind(address: Address): OmnuumNFT721 {
    return new OmnuumNFT721("OmnuumNFT721", address);
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  baseURI(): string {
    let result = super.call("baseURI", "baseURI():(string)", []);

    return result[0].toString();
  }

  try_baseURI(): ethereum.CallResult<string> {
    let result = super.tryCall("baseURI", "baseURI():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isRevealed(): boolean {
    let result = super.call("isRevealed", "isRevealed():(bool)", []);

    return result[0].toBoolean();
  }

  try_isRevealed(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isRevealed", "isRevealed():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  maxSupply(): BigInt {
    let result = super.call("maxSupply", "maxSupply():(uint32)", []);

    return result[0].toBigInt();
  }

  try_maxSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxSupply", "maxSupply():(uint32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class ChangeBaseURICall extends ethereum.Call {
  get inputs(): ChangeBaseURICall__Inputs {
    return new ChangeBaseURICall__Inputs(this);
  }

  get outputs(): ChangeBaseURICall__Outputs {
    return new ChangeBaseURICall__Outputs(this);
  }
}

export class ChangeBaseURICall__Inputs {
  _call: ChangeBaseURICall;

  constructor(call: ChangeBaseURICall) {
    this._call = call;
  }

  get baseURI_(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class ChangeBaseURICall__Outputs {
  _call: ChangeBaseURICall;

  constructor(call: ChangeBaseURICall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _caManagerAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _omnuumSigner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _maxSupply(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _coverBaseURI(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _prjOwner(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _name(): string {
    return this._call.inputValues[5].value.toString();
  }

  get _symbol(): string {
    return this._call.inputValues[6].value.toString();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class MintDirectCall extends ethereum.Call {
  get inputs(): MintDirectCall__Inputs {
    return new MintDirectCall__Inputs(this);
  }

  get outputs(): MintDirectCall__Outputs {
    return new MintDirectCall__Outputs(this);
  }
}

export class MintDirectCall__Inputs {
  _call: MintDirectCall;

  constructor(call: MintDirectCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _quantity(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MintDirectCall__Outputs {
  _call: MintDirectCall;

  constructor(call: MintDirectCall) {
    this._call = call;
  }
}

export class PublicMintCall extends ethereum.Call {
  get inputs(): PublicMintCall__Inputs {
    return new PublicMintCall__Inputs(this);
  }

  get outputs(): PublicMintCall__Outputs {
    return new PublicMintCall__Outputs(this);
  }
}

export class PublicMintCall__Inputs {
  _call: PublicMintCall;

  constructor(call: PublicMintCall) {
    this._call = call;
  }

  get _quantity(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _groupId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _payload(): PublicMintCall_payloadStruct {
    return changetype<PublicMintCall_payloadStruct>(
      this._call.inputValues[2].value.toTuple()
    );
  }
}

export class PublicMintCall__Outputs {
  _call: PublicMintCall;

  constructor(call: PublicMintCall) {
    this._call = call;
  }
}

export class PublicMintCall_payloadStruct extends ethereum.Tuple {
  get sender(): Address {
    return this[0].toAddress();
  }

  get topic(): string {
    return this[1].toString();
  }

  get nonce(): BigInt {
    return this[2].toBigInt();
  }

  get signature(): Bytes {
    return this[3].toBytes();
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetRevealedCall extends ethereum.Call {
  get inputs(): SetRevealedCall__Inputs {
    return new SetRevealedCall__Inputs(this);
  }

  get outputs(): SetRevealedCall__Outputs {
    return new SetRevealedCall__Outputs(this);
  }
}

export class SetRevealedCall__Inputs {
  _call: SetRevealedCall;

  constructor(call: SetRevealedCall) {
    this._call = call;
  }

  get baseURI_(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetRevealedCall__Outputs {
  _call: SetRevealedCall;

  constructor(call: SetRevealedCall) {
    this._call = call;
  }
}

export class TicketMintCall extends ethereum.Call {
  get inputs(): TicketMintCall__Inputs {
    return new TicketMintCall__Inputs(this);
  }

  get outputs(): TicketMintCall__Outputs {
    return new TicketMintCall__Outputs(this);
  }
}

export class TicketMintCall__Inputs {
  _call: TicketMintCall;

  constructor(call: TicketMintCall) {
    this._call = call;
  }

  get _quantity(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _ticket(): TicketMintCall_ticketStruct {
    return changetype<TicketMintCall_ticketStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }

  get _payload(): TicketMintCall_payloadStruct {
    return changetype<TicketMintCall_payloadStruct>(
      this._call.inputValues[2].value.toTuple()
    );
  }
}

export class TicketMintCall__Outputs {
  _call: TicketMintCall;

  constructor(call: TicketMintCall) {
    this._call = call;
  }
}

export class TicketMintCall_ticketStruct extends ethereum.Tuple {
  get user(): Address {
    return this[0].toAddress();
  }

  get nft(): Address {
    return this[1].toAddress();
  }

  get price(): BigInt {
    return this[2].toBigInt();
  }

  get quantity(): BigInt {
    return this[3].toBigInt();
  }

  get groupId(): BigInt {
    return this[4].toBigInt();
  }

  get signature(): Bytes {
    return this[5].toBytes();
  }
}

export class TicketMintCall_payloadStruct extends ethereum.Tuple {
  get sender(): Address {
    return this[0].toAddress();
  }

  get topic(): string {
    return this[1].toString();
  }

  get nonce(): BigInt {
    return this[2].toBigInt();
  }

  get signature(): Bytes {
    return this[3].toBytes();
  }
}

export class TransferBalanceCall extends ethereum.Call {
  get inputs(): TransferBalanceCall__Inputs {
    return new TransferBalanceCall__Inputs(this);
  }

  get outputs(): TransferBalanceCall__Outputs {
    return new TransferBalanceCall__Outputs(this);
  }
}

export class TransferBalanceCall__Inputs {
  _call: TransferBalanceCall;

  constructor(call: TransferBalanceCall) {
    this._call = call;
  }

  get _value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class TransferBalanceCall__Outputs {
  _call: TransferBalanceCall;

  constructor(call: TransferBalanceCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
