// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("event_selectors", Value.fromStringArray(new Array(0)));
    this.set("block_number", Value.fromI32(0));
    this.set("timestamp", Value.fromI32(0));
    this.set("from", Value.fromString(""));
    this.set("value", Value.fromBigInt(BigInt.zero()));
    this.set("gas_price", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Transaction entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Transaction must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Transaction", id.toString(), this);
    }
  }

  static load(id: string): Transaction | null {
    return changetype<Transaction | null>(store.get("Transaction", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get event_selectors(): Array<string> {
    let value = this.get("event_selectors");
    return value!.toStringArray();
  }

  set event_selectors(value: Array<string>) {
    this.set("event_selectors", Value.fromStringArray(value));
  }

  get block_number(): i32 {
    let value = this.get("block_number");
    return value!.toI32();
  }

  set block_number(value: i32) {
    this.set("block_number", Value.fromI32(value));
  }

  get timestamp(): i32 {
    let value = this.get("timestamp");
    return value!.toI32();
  }

  set timestamp(value: i32) {
    this.set("timestamp", Value.fromI32(value));
  }

  get from(): string {
    let value = this.get("from");
    return value!.toString();
  }

  set from(value: string) {
    this.set("from", Value.fromString(value));
  }

  get to(): string | null {
    let value = this.get("to");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set to(value: string | null) {
    if (!value) {
      this.unset("to");
    } else {
      this.set("to", Value.fromString(<string>value));
    }
  }

  get value(): BigInt {
    let value = this.get("value");
    return value!.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get gas_price(): BigInt {
    let value = this.get("gas_price");
    return value!.toBigInt();
  }

  set gas_price(value: BigInt) {
    this.set("gas_price", Value.fromBigInt(value));
  }

  get contracts(): Array<string> | null {
    let value = this.get("contracts");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set contracts(value: Array<string> | null) {
    if (!value) {
      this.unset("contracts");
    } else {
      this.set("contracts", Value.fromStringArray(<Array<string>>value));
    }
  }

  get contract_roles(): Array<string> | null {
    let value = this.get("contract_roles");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set contract_roles(value: Array<string> | null) {
    if (!value) {
      this.unset("contract_roles");
    } else {
      this.set("contract_roles", Value.fromStringArray(<Array<string>>value));
    }
  }

  get payments(): Array<string> | null {
    let value = this.get("payments");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set payments(value: Array<string> | null) {
    if (!value) {
      this.unset("payments");
    } else {
      this.set("payments", Value.fromStringArray(<Array<string>>value));
    }
  }

  get nfts(): Array<string> | null {
    let value = this.get("nfts");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set nfts(value: Array<string> | null) {
    if (!value) {
      this.unset("nfts");
    } else {
      this.set("nfts", Value.fromStringArray(<Array<string>>value));
    }
  }

  get mint_schedules(): Array<string> | null {
    let value = this.get("mint_schedules");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set mint_schedules(value: Array<string> | null) {
    if (!value) {
      this.unset("mint_schedules");
    } else {
      this.set("mint_schedules", Value.fromStringArray(<Array<string>>value));
    }
  }

  get mints(): Array<string> | null {
    let value = this.get("mints");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set mints(value: Array<string> | null) {
    if (!value) {
      this.unset("mints");
    } else {
      this.set("mints", Value.fromStringArray(<Array<string>>value));
    }
  }

  get reveals(): Array<string> | null {
    let value = this.get("reveals");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set reveals(value: Array<string> | null) {
    if (!value) {
      this.unset("reveals");
    } else {
      this.set("reveals", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class Contract extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("block_number", Value.fromI32(0));
    this.set("transaction", Value.fromString(""));
    this.set("owner", Value.fromString(""));
    this.set("topic", Value.fromString(""));
    this.set("is_removed", Value.fromBoolean(false));
    this.set("is_owner_changed", Value.fromBoolean(false));
    this.set("profit", Value.fromBigInt(BigInt.zero()));
    this.set("fee_paid", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Contract entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Contract must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Contract", id.toString(), this);
    }
  }

  static load(id: string): Contract | null {
    return changetype<Contract | null>(store.get("Contract", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get block_number(): i32 {
    let value = this.get("block_number");
    return value!.toI32();
  }

  set block_number(value: i32) {
    this.set("block_number", Value.fromI32(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get topic(): string {
    let value = this.get("topic");
    return value!.toString();
  }

  set topic(value: string) {
    this.set("topic", Value.fromString(value));
  }

  get is_removed(): boolean {
    let value = this.get("is_removed");
    return value!.toBoolean();
  }

  set is_removed(value: boolean) {
    this.set("is_removed", Value.fromBoolean(value));
  }

  get is_revealed(): boolean {
    let value = this.get("is_revealed");
    return value!.toBoolean();
  }

  set is_revealed(value: boolean) {
    this.set("is_revealed", Value.fromBoolean(value));
  }

  get is_owner_changed(): boolean {
    let value = this.get("is_owner_changed");
    return value!.toBoolean();
  }

  set is_owner_changed(value: boolean) {
    this.set("is_owner_changed", Value.fromBoolean(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get symbol(): string | null {
    let value = this.get("symbol");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set symbol(value: string | null) {
    if (!value) {
      this.unset("symbol");
    } else {
      this.set("symbol", Value.fromString(<string>value));
    }
  }

  get collection_id(): string | null {
    let value = this.get("collection_id");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set collection_id(value: string | null) {
    if (!value) {
      this.unset("collection_id");
    } else {
      this.set("collection_id", Value.fromString(<string>value));
    }
  }

  get cover_uri(): string | null {
    let value = this.get("cover_uri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set cover_uri(value: string | null) {
    if (!value) {
      this.unset("cover_uri");
    } else {
      this.set("cover_uri", Value.fromString(<string>value));
    }
  }

  get base_uri(): string | null {
    let value = this.get("base_uri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set base_uri(value: string | null) {
    if (!value) {
      this.unset("base_uri");
    } else {
      this.set("base_uri", Value.fromString(<string>value));
    }
  }

  get max_supply(): i32 {
    let value = this.get("max_supply");
    return value!.toI32();
  }

  set max_supply(value: i32) {
    this.set("max_supply", Value.fromI32(value));
  }

  get total_minted_amount(): i32 {
    let value = this.get("total_minted_amount");
    return value!.toI32();
  }

  set total_minted_amount(value: i32) {
    this.set("total_minted_amount", Value.fromI32(value));
  }

  get total_transferred_amount(): i32 {
    let value = this.get("total_transferred_amount");
    return value!.toI32();
  }

  set total_transferred_amount(value: i32) {
    this.set("total_transferred_amount", Value.fromI32(value));
  }

  get total_burned_amount(): i32 {
    let value = this.get("total_burned_amount");
    return value!.toI32();
  }

  set total_burned_amount(value: i32) {
    this.set("total_burned_amount", Value.fromI32(value));
  }

  get profit(): BigInt {
    let value = this.get("profit");
    return value!.toBigInt();
  }

  set profit(value: BigInt) {
    this.set("profit", Value.fromBigInt(value));
  }

  get fee_paid(): BigInt {
    let value = this.get("fee_paid");
    return value!.toBigInt();
  }

  set fee_paid(value: BigInt) {
    this.set("fee_paid", Value.fromBigInt(value));
  }

  get contract_roles(): string | null {
    let value = this.get("contract_roles");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set contract_roles(value: string | null) {
    if (!value) {
      this.unset("contract_roles");
    } else {
      this.set("contract_roles", Value.fromString(<string>value));
    }
  }

  get mint_schedules(): Array<string> | null {
    let value = this.get("mint_schedules");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set mint_schedules(value: Array<string> | null) {
    if (!value) {
      this.unset("mint_schedules");
    } else {
      this.set("mint_schedules", Value.fromStringArray(<Array<string>>value));
    }
  }

  get nfts(): Array<string> | null {
    let value = this.get("nfts");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set nfts(value: Array<string> | null) {
    if (!value) {
      this.unset("nfts");
    } else {
      this.set("nfts", Value.fromStringArray(<Array<string>>value));
    }
  }

  get mints(): Array<string> | null {
    let value = this.get("mints");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set mints(value: Array<string> | null) {
    if (!value) {
      this.unset("mints");
    } else {
      this.set("mints", Value.fromStringArray(<Array<string>>value));
    }
  }

  get reveals(): string | null {
    let value = this.get("reveals");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set reveals(value: string | null) {
    if (!value) {
      this.unset("reveals");
    } else {
      this.set("reveals", Value.fromString(<string>value));
    }
  }
}

export class ContractRole extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("block_number", Value.fromI32(0));
    this.set("transaction", Value.fromString(""));
    this.set("role", Value.fromStringArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ContractRole entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ContractRole must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ContractRole", id.toString(), this);
    }
  }

  static load(id: string): ContractRole | null {
    return changetype<ContractRole | null>(store.get("ContractRole", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get block_number(): i32 {
    let value = this.get("block_number");
    return value!.toI32();
  }

  set block_number(value: i32) {
    this.set("block_number", Value.fromI32(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get contract(): string | null {
    let value = this.get("contract");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set contract(value: string | null) {
    if (!value) {
      this.unset("contract");
    } else {
      this.set("contract", Value.fromString(<string>value));
    }
  }

  get role(): Array<string> {
    let value = this.get("role");
    return value!.toStringArray();
  }

  set role(value: Array<string>) {
    this.set("role", Value.fromStringArray(value));
  }
}

export class Payment extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("block_number", Value.fromI32(0));
    this.set("target", Value.fromString(""));
    this.set("origin", Value.fromString(""));
    this.set("value", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Payment entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Payment must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Payment", id.toString(), this);
    }
  }

  static load(id: string): Payment | null {
    return changetype<Payment | null>(store.get("Payment", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get block_number(): i32 {
    let value = this.get("block_number");
    return value!.toI32();
  }

  set block_number(value: i32) {
    this.set("block_number", Value.fromI32(value));
  }

  get transaction(): string | null {
    let value = this.get("transaction");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set transaction(value: string | null) {
    if (!value) {
      this.unset("transaction");
    } else {
      this.set("transaction", Value.fromString(<string>value));
    }
  }

  get target(): string {
    let value = this.get("target");
    return value!.toString();
  }

  set target(value: string) {
    this.set("target", Value.fromString(value));
  }

  get sender(): string | null {
    let value = this.get("sender");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set sender(value: string | null) {
    if (!value) {
      this.unset("sender");
    } else {
      this.set("sender", Value.fromString(<string>value));
    }
  }

  get origin(): string {
    let value = this.get("origin");
    return value!.toString();
  }

  set origin(value: string) {
    this.set("origin", Value.fromString(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value!.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get topic(): string | null {
    let value = this.get("topic");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set topic(value: string | null) {
    if (!value) {
      this.unset("topic");
    } else {
      this.set("topic", Value.fromString(<string>value));
    }
  }

  get description(): string | null {
    let value = this.get("description");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (!value) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(<string>value));
    }
  }
}

export class Nft extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("block_number", Value.fromI32(0));
    this.set("transaction", Value.fromString(""));
    this.set("nft_contract", Value.fromString(""));
    this.set("token_id", Value.fromString(""));
    this.set("owners", Value.fromStringArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Nft entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Nft must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Nft", id.toString(), this);
    }
  }

  static load(id: string): Nft | null {
    return changetype<Nft | null>(store.get("Nft", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get block_number(): i32 {
    let value = this.get("block_number");
    return value!.toI32();
  }

  set block_number(value: i32) {
    this.set("block_number", Value.fromI32(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get nft_contract(): string {
    let value = this.get("nft_contract");
    return value!.toString();
  }

  set nft_contract(value: string) {
    this.set("nft_contract", Value.fromString(value));
  }

  get token_id(): string {
    let value = this.get("token_id");
    return value!.toString();
  }

  set token_id(value: string) {
    this.set("token_id", Value.fromString(value));
  }

  get minter(): string | null {
    let value = this.get("minter");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set minter(value: string | null) {
    if (!value) {
      this.unset("minter");
    } else {
      this.set("minter", Value.fromString(<string>value));
    }
  }

  get owners(): Array<string> {
    let value = this.get("owners");
    return value!.toStringArray();
  }

  set owners(value: Array<string>) {
    this.set("owners", Value.fromStringArray(value));
  }
}

export class MintSchedule extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("block_number", Value.fromI32(0));
    this.set("transaction", Value.fromString(""));
    this.set("nft_contract", Value.fromString(""));
    this.set("topic", Value.fromString(""));
    this.set("group_id", Value.fromString(""));
    this.set("end_date", Value.fromI32(0));
    this.set("minted_amount", Value.fromI32(0));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MintSchedule entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type MintSchedule must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MintSchedule", id.toString(), this);
    }
  }

  static load(id: string): MintSchedule | null {
    return changetype<MintSchedule | null>(store.get("MintSchedule", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get block_number(): i32 {
    let value = this.get("block_number");
    return value!.toI32();
  }

  set block_number(value: i32) {
    this.set("block_number", Value.fromI32(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get nft_contract(): string {
    let value = this.get("nft_contract");
    return value!.toString();
  }

  set nft_contract(value: string) {
    this.set("nft_contract", Value.fromString(value));
  }

  get topic(): string {
    let value = this.get("topic");
    return value!.toString();
  }

  set topic(value: string) {
    this.set("topic", Value.fromString(value));
  }

  get group_id(): string {
    let value = this.get("group_id");
    return value!.toString();
  }

  set group_id(value: string) {
    this.set("group_id", Value.fromString(value));
  }

  get end_date(): i32 {
    let value = this.get("end_date");
    return value!.toI32();
  }

  set end_date(value: i32) {
    this.set("end_date", Value.fromI32(value));
  }

  get base_price(): BigInt | null {
    let value = this.get("base_price");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set base_price(value: BigInt | null) {
    if (!value) {
      this.unset("base_price");
    } else {
      this.set("base_price", Value.fromBigInt(<BigInt>value));
    }
  }

  get mint_supply(): i32 {
    let value = this.get("mint_supply");
    return value!.toI32();
  }

  set mint_supply(value: i32) {
    this.set("mint_supply", Value.fromI32(value));
  }

  get mint_limit_per_address(): i32 {
    let value = this.get("mint_limit_per_address");
    return value!.toI32();
  }

  set mint_limit_per_address(value: i32) {
    this.set("mint_limit_per_address", Value.fromI32(value));
  }

  get minted_amount(): i32 {
    let value = this.get("minted_amount");
    return value!.toI32();
  }

  set minted_amount(value: i32) {
    this.set("minted_amount", Value.fromI32(value));
  }
}

export class Minter extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("block_number", Value.fromI32(0));
    this.set("minter_address", Value.fromString(""));
    this.set("nfts", Value.fromStringArray(new Array(0)));
    this.set("minted_amount", Value.fromI32(0));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Minter entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Minter must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Minter", id.toString(), this);
    }
  }

  static load(id: string): Minter | null {
    return changetype<Minter | null>(store.get("Minter", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get block_number(): i32 {
    let value = this.get("block_number");
    return value!.toI32();
  }

  set block_number(value: i32) {
    this.set("block_number", Value.fromI32(value));
  }

  get minter_address(): string {
    let value = this.get("minter_address");
    return value!.toString();
  }

  set minter_address(value: string) {
    this.set("minter_address", Value.fromString(value));
  }

  get nfts(): Array<string> {
    let value = this.get("nfts");
    return value!.toStringArray();
  }

  set nfts(value: Array<string>) {
    this.set("nfts", Value.fromStringArray(value));
  }

  get minted_amount(): i32 {
    let value = this.get("minted_amount");
    return value!.toI32();
  }

  set minted_amount(value: i32) {
    this.set("minted_amount", Value.fromI32(value));
  }
}

export class Mint extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("block_number", Value.fromI32(0));
    this.set("transaction", Value.fromString(""));
    this.set("nft_contract", Value.fromString(""));
    this.set("topic", Value.fromString(""));
    this.set("minter", Value.fromString(""));
    this.set("mint_quantity", Value.fromI32(0));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Mint entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Mint must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Mint", id.toString(), this);
    }
  }

  static load(id: string): Mint | null {
    return changetype<Mint | null>(store.get("Mint", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get block_number(): i32 {
    let value = this.get("block_number");
    return value!.toI32();
  }

  set block_number(value: i32) {
    this.set("block_number", Value.fromI32(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get nft_contract(): string {
    let value = this.get("nft_contract");
    return value!.toString();
  }

  set nft_contract(value: string) {
    this.set("nft_contract", Value.fromString(value));
  }

  get mint_schedule(): string | null {
    let value = this.get("mint_schedule");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set mint_schedule(value: string | null) {
    if (!value) {
      this.unset("mint_schedule");
    } else {
      this.set("mint_schedule", Value.fromString(<string>value));
    }
  }

  get topic(): string {
    let value = this.get("topic");
    return value!.toString();
  }

  set topic(value: string) {
    this.set("topic", Value.fromString(value));
  }

  get minter(): string {
    let value = this.get("minter");
    return value!.toString();
  }

  set minter(value: string) {
    this.set("minter", Value.fromString(value));
  }

  get mint_quantity(): i32 {
    let value = this.get("mint_quantity");
    return value!.toI32();
  }

  set mint_quantity(value: i32) {
    this.set("mint_quantity", Value.fromI32(value));
  }

  get max_quantity(): i32 {
    let value = this.get("max_quantity");
    return value!.toI32();
  }

  set max_quantity(value: i32) {
    this.set("max_quantity", Value.fromI32(value));
  }

  get mint_price(): BigInt | null {
    let value = this.get("mint_price");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set mint_price(value: BigInt | null) {
    if (!value) {
      this.unset("mint_price");
    } else {
      this.set("mint_price", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class Reveal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("block_number", Value.fromI32(0));
    this.set("transaction", Value.fromString(""));
    this.set("nft_contract", Value.fromString(""));
    this.set("topic", Value.fromString(""));
    this.set("vrf_fare", Value.fromBigInt(BigInt.zero()));
    this.set("starting_index", Value.fromI32(0));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Reveal entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Reveal must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Reveal", id.toString(), this);
    }
  }

  static load(id: string): Reveal | null {
    return changetype<Reveal | null>(store.get("Reveal", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get block_number(): i32 {
    let value = this.get("block_number");
    return value!.toI32();
  }

  set block_number(value: i32) {
    this.set("block_number", Value.fromI32(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get nft_contract(): string {
    let value = this.get("nft_contract");
    return value!.toString();
  }

  set nft_contract(value: string) {
    this.set("nft_contract", Value.fromString(value));
  }

  get topic(): string {
    let value = this.get("topic");
    return value!.toString();
  }

  set topic(value: string) {
    this.set("topic", Value.fromString(value));
  }

  get vrf_fare(): BigInt {
    let value = this.get("vrf_fare");
    return value!.toBigInt();
  }

  set vrf_fare(value: BigInt) {
    this.set("vrf_fare", Value.fromBigInt(value));
  }

  get random_number(): BigInt | null {
    let value = this.get("random_number");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set random_number(value: BigInt | null) {
    if (!value) {
      this.unset("random_number");
    } else {
      this.set("random_number", Value.fromBigInt(<BigInt>value));
    }
  }

  get starting_index(): i32 {
    let value = this.get("starting_index");
    return value!.toI32();
  }

  set starting_index(value: i32) {
    this.set("starting_index", Value.fromI32(value));
  }
}

export class WalletRequest extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("block_number", Value.fromI32(0));
    this.set("transaction", Value.fromString(""));
    this.set("requester", Value.fromString(""));
    this.set("request_type", Value.fromString(""));
    this.set("voters", Value.fromStringArray(new Array(0)));
    this.set("votes", Value.fromI32(0));
    this.set("is_execute", Value.fromBoolean(false));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save WalletRequest entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type WalletRequest must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("WalletRequest", id.toString(), this);
    }
  }

  static load(id: string): WalletRequest | null {
    return changetype<WalletRequest | null>(store.get("WalletRequest", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get block_number(): i32 {
    let value = this.get("block_number");
    return value!.toI32();
  }

  set block_number(value: i32) {
    this.set("block_number", Value.fromI32(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get requester(): string {
    let value = this.get("requester");
    return value!.toString();
  }

  set requester(value: string) {
    this.set("requester", Value.fromString(value));
  }

  get request_type(): string {
    let value = this.get("request_type");
    return value!.toString();
  }

  set request_type(value: string) {
    this.set("request_type", Value.fromString(value));
  }

  get current_owner_address(): string | null {
    let value = this.get("current_owner_address");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set current_owner_address(value: string | null) {
    if (!value) {
      this.unset("current_owner_address");
    } else {
      this.set("current_owner_address", Value.fromString(<string>value));
    }
  }

  get current_owner_vote(): i32 {
    let value = this.get("current_owner_vote");
    return value!.toI32();
  }

  set current_owner_vote(value: i32) {
    this.set("current_owner_vote", Value.fromI32(value));
  }

  get new_owner_address(): string | null {
    let value = this.get("new_owner_address");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set new_owner_address(value: string | null) {
    if (!value) {
      this.unset("new_owner_address");
    } else {
      this.set("new_owner_address", Value.fromString(<string>value));
    }
  }

  get new_owner_vote(): i32 {
    let value = this.get("new_owner_vote");
    return value!.toI32();
  }

  set new_owner_vote(value: i32) {
    this.set("new_owner_vote", Value.fromI32(value));
  }

  get withdrawal_amount(): BigInt | null {
    let value = this.get("withdrawal_amount");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set withdrawal_amount(value: BigInt | null) {
    if (!value) {
      this.unset("withdrawal_amount");
    } else {
      this.set("withdrawal_amount", Value.fromBigInt(<BigInt>value));
    }
  }

  get voters(): Array<string> {
    let value = this.get("voters");
    return value!.toStringArray();
  }

  set voters(value: Array<string>) {
    this.set("voters", Value.fromStringArray(value));
  }

  get votes(): i32 {
    let value = this.get("votes");
    return value!.toI32();
  }

  set votes(value: i32) {
    this.set("votes", Value.fromI32(value));
  }

  get is_execute(): boolean {
    let value = this.get("is_execute");
    return value!.toBoolean();
  }

  set is_execute(value: boolean) {
    this.set("is_execute", Value.fromBoolean(value));
  }
}

export class WalletProfit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("block_number", Value.fromI32(0));
    this.set("value", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save WalletProfit entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type WalletProfit must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("WalletProfit", id.toString(), this);
    }
  }

  static load(id: string): WalletProfit | null {
    return changetype<WalletProfit | null>(store.get("WalletProfit", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get block_number(): i32 {
    let value = this.get("block_number");
    return value!.toI32();
  }

  set block_number(value: i32) {
    this.set("block_number", Value.fromI32(value));
  }

  get contract(): string | null {
    let value = this.get("contract");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set contract(value: string | null) {
    if (!value) {
      this.unset("contract");
    } else {
      this.set("contract", Value.fromString(<string>value));
    }
  }

  get value(): BigInt {
    let value = this.get("value");
    return value!.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}
