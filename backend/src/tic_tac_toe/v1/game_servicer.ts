// THIS FILE IS GENERATED AND WILL BE OVERWRITTEN ON THE NEXT
// 'rbt protoc' INVOCATION. DO NOT MODIFY THIS FILE DIRECTLY.
// However, feel free to copy-paste sections of this file into
// your own source files; that's what this file is here for!

import { PartialMessage } from "@bufbuild/protobuf";
import {
  ReaderContext,
  WriterContext,
} from "@reboot-dev/reboot";
import {
  Game,
  History,
  HistoryResponse,
  UpdateRequest,
// TODO: Adjust the import path to match the actual path of the generated file.
} from "game_rbt.js";


class GameServicer extends Game.Interface {
  // An example of how to implement a Typescript servicer for the
  // Game service, using Reboot.
  // You can copy-paste this servicer, or parts of it, to be the basis
  // for the implementation of your own servicer.


  async history(
    context: ReaderContext,
    state: Game.State,
    request: Empty
  ): Promise<HistoryResponse | PartialMessage<HistoryResponse>> {
    // TODO: implement your own business logic here!
    //
    // TODO: fill in the response here.
    // return new HistoryResponse()
    //
    // If you want to return a partial response, you can do so like this:
    // return {
    //    message: "This is a partial response",
    // }
    //
    // Read more about the reader methods in the Reboot documentation:
    // https://docs.reboot.dev/develop/servicers#reader
    throw new Error("Not implemented");
  }

  async update(
    context: WriterContext,
    state: Game.State,
    request: UpdateRequest
  ): Promise<Empty | PartialMessage<Empty>> {
    // TODO: implement your own business logic here!
    //
    // Update `state` as neccessary.
    //
    // state.field = ...
    //
    // return new Empty()
    //
    // If you want to return a partial response, you can do so like this:
    // return {
    //    message: "This is a partial response",
    // }
    //
    // Read more about the writer methods in the Reboot documentation:
    // https://docs.reboot.dev/develop/servicers/#writer

    throw new Error("Not implemented");
  }
}
