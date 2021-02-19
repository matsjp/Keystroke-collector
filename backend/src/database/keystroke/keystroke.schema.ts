import { Schema } from "mongoose";
const KeystrokeSchema = new Schema({
    gender: String,
    age: Number,
    dateOfEntry: {
      type: Date,
      default: new Date()
    },
    tasks: [
        {
            name: String,
            freehand: Boolean,
            keyEvents: [
                {
                    keyCode: Number,
                    timestamp: Date,
                    eventType: String
                }
            ]
        }
    ]
  });
  
  export default KeystrokeSchema;