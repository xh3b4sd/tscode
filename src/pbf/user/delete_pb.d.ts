import * as jspb from "google-protobuf";

export class DeleteI extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteI;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteI.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteI): DeleteI.AsObject;
  static serializeBinaryToWriter(
    message: DeleteI,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): DeleteI;
  static deserializeBinaryFromReader(
    message: DeleteI,
    reader: jspb.BinaryReader
  ): DeleteI;
}

export namespace DeleteI {
  export type AsObject = {
    name: string;
  };
}

export class DeleteO extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): DeleteO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteO.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteO): DeleteO.AsObject;
  static serializeBinaryToWriter(
    message: DeleteO,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): DeleteO;
  static deserializeBinaryFromReader(
    message: DeleteO,
    reader: jspb.BinaryReader
  ): DeleteO;
}

export namespace DeleteO {
  export type AsObject = {
    message: string;
  };
}
