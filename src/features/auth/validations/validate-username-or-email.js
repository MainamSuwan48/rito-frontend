import Joi from 'joi';

export const usernameOrEmailSchema = Joi.object({
  usernameOrEmail: Joi.string().required().messages({
    'string.empty': 'Please enter your username or email',
    'any.required': 'Please enter your username or email',
  }),
});
