"use strict";

/*
 * This file contains code for validation of request params 
*/

const Joi = require("joi");

const checkGetSchema = {
  query: {
    city: Joi.string().optional(),
    category: Joi.string().optional(),
    limit: Joi.number().optional(),
    page: Joi.number().optional(),
  }
};

const checkPostSchema = {
  body: {
    category: Joi.string().required(),
    store: Joi.string().required(),
    address: Joi.string().required(),
    city: Joi.string().required(),
  }
};

const checkUpdateSchema = {
  body: {
    status: Joi.boolean().optional()
  }
};

const checkDeleteSchema = {
  query: {
    status: Joi.boolean().optional()
  }
};

module.exports = {
  checkGetSchema,
  checkPostSchema,
  checkUpdateSchema,
  checkDeleteSchema
};
