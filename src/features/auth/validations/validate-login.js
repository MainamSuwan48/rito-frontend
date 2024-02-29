import Joi from 'joi';
import validate from '';

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': 'Please enter your email',
    'any.required': 'Please enter your email',
  }),
  password: Joi.string().min(6).required().messages({
    'string.empty': 'Please enter your password',
    'string.min': 'Password must be at least 6 characters',
    'any.required': 'Please enter your password',
  }),
});

const validateLogin = (input) => validate(loginSchema)(input);
export default validateLogin;
