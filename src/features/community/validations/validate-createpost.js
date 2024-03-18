import Joi from 'joi';

export const createPostSchema = Joi.object({
  title: Joi.string().trim().required().messages({
    'string.empty': 'Title is required',
    'any.required': 'Title is required',
  }),
  category: Joi.string().trim().required().messages({
    'string.empty': 'Category is required',
    'any.required': 'Category is required',
  }),
  content: Joi.any(),
  images: Joi.any(),
  game: Joi.string().trim().required().messages({
    'string.empty': 'Game is required',
    'any.required': 'Game is required',
  }),
});
