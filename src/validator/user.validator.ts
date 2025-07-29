import * as Joi from "joi";

export const userValidator = Joi.object({
    username: Joi.string().pattern(/\w{4,}/).required().messages({
        'string.pattern.base':'Only chars allowed & this must be at least 4 characters.',
    }),

    password: Joi.string().min(3).max(6).required().messages({
        'string.min':'Password can be least 3 chars',
        'string.max':'Password cannot be gt 6 chars',
    }),

    age: Joi.number().min(6).max(120).required().messages({
        'number.min':'Min age is 6',
        'number.max':'Max age is 120',
    }),
})