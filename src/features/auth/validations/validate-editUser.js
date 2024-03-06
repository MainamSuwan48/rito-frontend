import Joi from "joi";

export const editUserSchema = Joi.object({
    displayName: Joi.string().required().messages({
        'string.emty':'Please enter display name',
        'any.required':'Please enter display name'
    }),
    description: Joi.string().required().messages({
        'string.emty':'Please enter description',
        'any.required':'Please enter description'
    }),
    firstName: Joi.string().min(3).max(30).required().trim().messages({
        'string.empty': 'First name is required.',
        'string.min': 'First name must be at least 3 characters long.',
        'string.max': 'First name cannot exceed 30 characters.',
    }),
     lastName: Joi.string().min(3).max(30).required().trim().messages({
        'string.empty': 'Last name is required.',
        'string.min': 'Last name must be at least 3 characters long.',
        'string.max': 'Last name cannot exceed 30 characters.',
    }),
})

