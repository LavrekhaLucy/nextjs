import Joi from "joi";

export const carsValidator = Joi.object({
    brand: Joi.string().pattern(/^[A-Za-zА-Яа-яЇїІіЄєҐґ0-9\s\-]+$/).required().messages({
        "string.pattern.base":'Enter the car brand',
        "string.empty": "The 'Brand' field is mandatory",

    }),
    year: Joi.number().min(1900).max(new Date().getFullYear() + 1).messages({
        "number.min": "Year cannot be less than 1900",
        "number.max": "A year cannot be greater than the following year",
    }),
    price: Joi.number().min(0).required().messages({
        "number.min": "Price cannot be negative",
    }),
})