"use strict";

/*
 * This file contails all the routes that are related to 
 * credit scoring of the user. 
*/
const express = require("express");
const router = express.Router();
const validate = require("express-validation");
const validations = require("./validations");
const ShopControllers = require("../controllers/shopController");
const { logger } = require("../../utils");

router
  .get("/getShopsList", validate(validations.checkGetSchema), (req, res) => {
    // send only the data that is required by the controller
    const response = {
      success: false,
      message: "",
      count: 0,
      data: {}
    };
    logger.info(req.get);
    ShopControllers.getShopsList(req.query)
      .then(data => {
        if (!data) {
          response.success = false;
          response.message = "Something went wrong";
          return res.status(500).json(response);
        } else {
          response.success = true;
          response.message = "Success !!";
          response.count = data.length;
          response.data = data;
          return res.status(200).json(response);
        }
      })
      .catch(error => {
        logger.error(error);
        response.success = false;
        response.message = error.message;
        return res.status(403).json(response);
      });
  })
  .post("/createShop", validate(validations.checkPostSchema), (req, res) => {
    // send only the data that is required by the controller
    const response = {
      success: false,
      message: "",
      data: {}
    };
    logger.info(req.body);
    ShopControllers.createShop(req.body)
      .then(data => {
        if (!data) {
          response.success = false;
          response.message = "Something went wrong";
          return res.status(500).json(response);
        } else {
          response.success = true;
          response.message = "Success !!";
          response.data = data;
          return res.status(200).json(response);
        }
      })
      .catch(error => {
        logger.error(error);
        response.success = false;
        response.message = error.message;
        return res.status(403).json(response);
      });
  })
  .put("/update", validate(validations.checkUpdateSchema), (req, res) => {
    // send only the data that is required by the controller
    logger.info(req.body);
    DummyControllers.update(req.user, req.body)
      .then(response => {
        logger.info(response);
        if (!response) {
          res.status(500).send("Something went wrong");
        } else {
          res.status(200).json(response);
        }
      })
      .catch(err => {
        logger.error(err);
        res.status(403).json(err);
      });
  })
  .delete("/delete", validate(validations.checkDeleteSchema), (req, res) => {
    // send only the data that is required by the controller
    logger.info(req.body);
    DummyControllers.delete(req.user, req.body)
      .then(response => {
        logger.info(response);
        if (!response) {
          res.status(500).send("Something went wrong");
        } else {
          res.status(200).json(response);
        }
      })
      .catch(err => {
        logger.error(err);
        res.status(403).json(err);
      });
  });

module.exports = router;
