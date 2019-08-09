"use strict";

/*
 * This file will have all leder decision related functions
 * For now only of progressa 
 */
const dotenv = require("dotenv");
dotenv.config();

const Shop = require("../models/shop");
const { logger } = require("../../utils");

const _shop = {};

// This controller gets the data from the database.
_shop.getShopsList = function (queryData) {
  return new Promise((resolve, reject) => {

    const criteria = {
      city: queryData.city,
      category: queryData.category
    };

    const projection = {};
    // const options = {
    //   limit: queryData.limit,
    //   skip: queryData.page
    // }
    Shop.find(criteria, projection)
      .then(shop => {
        if (shop) {
          return shop;
        } else {
          return new Error("Data not found");
        }
      })
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

// This controller posts the data to the database.
_shop.createShop = function (payloadData) {
  return new Promise((resolve, reject) => {
    logger.info(payloadData);
    const shop = new Shop(payloadData);
    shop
      .save()
      .then(dataSaved => {
        resolve(dataSaved);
      })
      .catch(err => {
        reject(err);
      });
  });
};

// This controller updates the data in the database.
_shop.update = function (userData, payloadData) {
  return new Promise((resolve, reject) => {
    if (!userData) {
      reject(new Error("Please send proper authorization."));
    } else {
      const criteria = {
        phoneNo: userData.phoneNo
      };
      Dummy.findOne(criteria)
        .then(dummy => {
          if (dummy) {
            dummy.name = payloadData.name || dummy.name;
            return dummy.save();
          } else {
            return new Error("Data not found");
          }
        })
        .then(data => {
          data = data.toObject();
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    }
  });
};

// This controller deletes the data from the database.
_shop.delete = function (userData) {
  return new Promise((resolve, reject) => {
    if (!userData) {
      reject(new Error("Please send proper authorization."));
    } else {
      const criteria = {
        phoneNo: userData.phoneNo
      };
      Dummy.findOneAndRemove(criteria)
        .then(dataSaved => {
          resolve(dataSaved);
        })
        .catch(err => {
          reject(err);
        });
    }
  });
};

module.exports = _shop;
