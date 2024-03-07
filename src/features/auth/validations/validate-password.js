import Joi from 'joi';

export const passwordSchema = Joi.object({
  password: Joi.string()
    .pattern(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/
    )
    .required()
    .messages({
      'string.empty': 'Password is required.',
      'string.pattern.base':
        'Password must contain at least one letter, one number, and one special character and atleast 6 characters.',
    }),
  confirmPassword: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'string.empty': 'Confirm password is required.',
      'any.only': 'Passwords do not match.',
    })
    .strip(),
});
