"use strict";

/*
 * This file imports all the required controllers
 */

const express = require("express");
const app = express();

const ShopRoute = require("./shopRoute");

app.use(ShopRoute);

module.exports = app;
