import {EventNames} from "../enums";

class EventData {
    success: boolean;
    targets: string[];
}

class ViewLifeData extends EventData {
    lifeCount: number;
}

export const EventDataWithSkill: {[eventName in EventNames]: {new (): EventData}} = {
    [EventNames.ADMIN_START_GAME]: EventData,
    [EventNames.BECOME_WOLF]: EventData,
    [EventNames.BE_CURSED]: EventData,
    [EventNames.BE_PAIRED_WITH]: EventData,
    [EventNames.BITE]: EventData,
    [EventNames.CHOOSE_MOTHER]: EventData,
    [EventNames.CURSE]: EventData,
    [EventNames.DIE_OF_LOVE]: EventData,
    [EventNames.FIRE]: EventData,
    [EventNames.FIRE_DIRECTLY]: EventData,
    [EventNames.KILL]: EventData,
    [EventNames.NO_EVENT]: EventData,
    [EventNames.PAIRING]: EventData,
    [EventNames.POINT]: EventData,
    [EventNames.PROTECT]: EventData,
    [EventNames.READY]: EventData,
    [EventNames.SAVE]: EventData,
    [EventNames.SEE]: EventData,
    [EventNames.SEE_MOTHER_DIE]: EventData,
    [EventNames.SKIP]: EventData,
    [EventNames.VIEW_DEAD_MAN]: EventData,
    [EventNames.VIEW_LIFE]: EventData,
    [EventNames.VOTE]: EventData,
    [EventNames.VOTE_NO]: EventData,
    [EventNames.VOTE_YES]: EventData
};