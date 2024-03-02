import Joi from 'joi';

export const registerSchema = Joi.object({
  username: Joi.string().min(3).max(30).required().trim().messages({
    'string.empty': 'Username is required.',
    'string.min': 'Username must be at least 3 characters long.',
    'string.max': 'Username cannot exceed 30 characters.',
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Email is required.',
      'string.email': 'Email must be a valid email address.',
    }),
  username: Joi.string().min(3).max(30).required().trim().messages({
    'string.empty': 'Username is required.',
    'string.min': 'Username must be at least 3 characters long.',
    'string.max': 'Username cannot exceed 30 characters.',
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

