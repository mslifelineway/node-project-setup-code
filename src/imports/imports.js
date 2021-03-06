const constants = require("../constants/messages");
const path = require("path");
const fs = require("fs");
const bcryptCompare = require("../utils/utils").bcryptCompare;
const bcrypt = require("../utils/utils").bcrypt;
const hashPassword = require("../utils/utils").hashPassword;
const Cryptr = require("cryptr");
const cryptr = new Cryptr("@indianclicks");

//mongodb models

module.exports = {
  constants,
  path,
  fs,
  bcryptCompare,
  bcrypt,
  hashPassword,
  cryptr,
};
