import {StageNames} from "../../enums";

export interface IMessage extends IMessageProto {
    id: string;
    stageName: StageNames; // => stagePlayers => toIDs
    createTime: number;
}

export interface IMessageProto {
    fromID: string;
    content: string;
}

export function newIMessageProto(fromID: string, content: string): IMessageProto {
    return {fromID, content};
}
