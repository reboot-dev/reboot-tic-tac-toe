import { PartialMessage, Empty } from "@bufbuild/protobuf";
import {
  Application,
  ReaderContext,
  WriterContext,
} from "@reboot-dev/reboot";
import {
  Game,
  HistoryResponse,
  UpdateRequest,
} from "../../api/tic_tac_toe/v1/game_rbt.js";

const GAME_ID = "reboot-tic-tac-toe";


class GameServicer extends Game.Interface {

  async history(
    context: ReaderContext,
    state: Game.State,
    request: Empty
  ): Promise<HistoryResponse | PartialMessage<HistoryResponse>> {
    return { history: state.history };
  }

  async update(
    context: WriterContext,
    state: Game.State,
    request: UpdateRequest
  ): Promise<Empty | PartialMessage<Empty>> {
    state.history = request.history;
    state.currentMove = request.currentMove;
    return {};
  }
}

const initialize = async (context) => {
  await Game.construct({ id: GAME_ID })
    .idempotently()
    .update(context, { currentMove: 0 });
};

new Application({
  servicers: [GameServicer],
  initialize,
}).run();
