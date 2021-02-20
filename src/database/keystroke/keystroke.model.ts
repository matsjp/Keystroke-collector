import { model } from "mongoose";
import { IKeystrokeDocument } from "./keystroke.types";
import KeystrokeSchema from "./keystroke.schema";
export const KeystrokeModel = model<IKeystrokeDocument>("keystrokes", KeystrokeSchema);