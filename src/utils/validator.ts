import Joi from 'joi';

export const userSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(50)
    .required()
    .messages({
      'string.empty': 'Name is required',
      'string.min': 'Name must be at least 3 characters',
      'string.max': 'Name cannot exceed 50 characters'
    }),

  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required()
    .messages({
      'string.email': 'Please enter a valid email',
      'string.empty': 'Email is required'
    }),

  age: Joi.number()
    .integer()
    .max(120)
    .required()
    .messages({
      'number.base': 'Age must be a number'
    })
});