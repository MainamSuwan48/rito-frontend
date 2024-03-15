import Joi from 'joi';

export const createGameSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    'string.empty': 'Game name is required',
    'any.required': 'Game name is required',
  }),
  releasedDate: Joi.date().less('now').required().messages({
    'date.base': 'Invalid released date',
    'any.required': 'Game name is required',
    'date.less': 'Game must be already released',
  }),
  description: Joi.string().trim().allow(''),
  price: Joi.number().required().messages({
    'number.base': 'Invalid price',
    'any.required': 'Price is required',
  }),
  discount: Joi.string().trim(),
  backgroundImage: Joi.string(),
  metacritic: Joi.number().min(0).max(100).allow('').messages({
    'number.base': 'Invalid metacritic score',
    'number.max': 'Metacritic score must be in range of 0 - 100',
    'number.min': 'Metacritic score must be in range of 0 - 100',
  }),
  genres: Joi.any(),
  tags: Joi.any(),
  platforms: Joi.any(),
  screenshots: Joi.any(),
});
