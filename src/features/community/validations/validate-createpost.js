import Joi from 'joi';

export const createPostSchema = Joi.object({
  title: Joi.string().trim().required().messages({
    'string.empty': 'Title is required',
    'any.required': 'Title is required',
  }),
  postType: Joi.string().trim().required().messages({
    'string.empty': 'Category is required',
    'any.required': 'Category is required',
  }),
  content: Joi.string().trim().allow(''),
  // images: Joi.any(),
  gameId: Joi.number().required().messages({
    'string.empty': 'Game is required',
    'any.required': 'Game is required',
  }),
});
