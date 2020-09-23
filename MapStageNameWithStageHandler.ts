import DefaultStageHandler from "../stage_handler/DefaultStageHandler";
import StartGameStageHandler from "../stage_handler/StartGameStageHandler";
import CupidStageHandler from "../stage_handler/CupidStageHandler";
import WildChildStage from "../stage_handler/WildChildStage";
import SaverStageHandler from "../stage_handler/SaverStageHandler";
import SeerStageHandler from "../stage_handler/SeerStageHandler";
import HunterStageHandler from "../stage_handler/HunterStageHandler";
import WolfStage from "../stage_handler/WolfStage";
import WolfPlusStage from "../stage_handler/WolfPlusStage";
import DiscussStageHandler from "../stage_handler/DiscussStageHandler";
import VoteStageHandler from "../stage_handler/VoteStageHandler";
import LastWordStage from "../stage_handler/LastWordStage";
import VoteYesNoStageHandler from "../stage_handler/VoteYesNoStageHandler";
import EndOfDayStageHandler from "../stage_handler/EndOfDayStageHandler";
import EndGameStageHandler from "../stage_handler/EndGameStageHandler";
import {Stages} from "./Stages";
import {WaitingStage} from "../stage_handler/WaitingStage";
import WitchKillStage from "../stage_handler/WitchKillStage";
import WitchSaveStage from "../stage_handler/WitchSaveStage";
import OldManStageHandler from "../stage_handler/OldManStageHandler";

export const MapStageNameWithStageHandler: {[stage in Stages]: {new (): DefaultStageHandler}} = {
    WAITING_STAGE: WaitingStage,
    START_GAME: StartGameStageHandler,
    CUPID: CupidStageHandler,
    WILD_CHILD: WildChildStage,
    SAVER: SaverStageHandler,
    SEER: SeerStageHandler,
    HUNTER: HunterStageHandler,
    WOLF: WolfStage,
    WOLF_PLUS: WolfPlusStage,
    WITCH_KILL: WitchKillStage,
    WITCH_SAVE: WitchSaveStage,
    COUPLE: DefaultStageHandler,
    OLD_MAN: OldManStageHandler,
    DISCUSS: DiscussStageHandler,
    VOTE: VoteStageHandler,
    LAST_WORD: LastWordStage,
    VOTE_YES_NO: VoteYesNoStageHandler,
    END_OF_DAY: EndOfDayStageHandler,
    END_GAME: EndGameStageHandler
};
