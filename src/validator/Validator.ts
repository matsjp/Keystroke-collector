import Joi from "joi";

const keyEvent = Joi.object({
    keyCode: Joi.number().required(),
    timestamp: Joi.date().required(),
    eventType: Joi.string().valid("keyUp", "keyDown").required()
});

const task = Joi.object({
    name: Joi.string().required(),
    freehand: Joi.boolean().required(),
    keyEvents: Joi.array().items(keyEvent).required()

});

export default Joi.object({
    gender: Joi.string().valid("male", "female").required(),
    age: Joi.number().required(),
    dateOfEntry: Joi.date().required(),
    tasks: Joi.array().items(task).required()
});