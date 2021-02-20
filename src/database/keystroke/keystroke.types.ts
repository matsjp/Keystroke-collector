import { Document, Model } from "mongoose";

export interface IKeystrokeEvent{
    keyCode: number;
    timestamp: Date;
    eventType: string;
    order: number;
}

export interface ITask{
    name: string;
    freehand: boolean;
    keyEvents: Array<IKeystrokeEvent>;
}

export interface IKeystroke {
    gender: string;
    age: number;
    dateOfEntry?: Date;
    tasks: Array<ITask>;
  }


export interface IKeystrokeDocument extends IKeystroke, Document {}
export interface IKeystrokeModel extends Model<IKeystrokeDocument> {}