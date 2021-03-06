var bcrypt;
try {
  // Try the native module first
  bcrypt = require('bcrypt');
  // Browserify returns an empty object
  if (bcrypt && typeof bcrypt.compare !== 'function') {
    bcrypt = require('bcryptjs');
  }
} catch (err) {
  // Fall back to pure JS impl
  bcrypt = require('bcryptjs');
};
hashPassword = (password, cb) => { //hashing password
  bcrypt.genSalt(10, function (err, salt) {
    if (err)
      cb(err);
    bcrypt.hash(password, salt, function (err, hash) {
      if (err)
        cb(err, { message: "error occured", password: '' });
      else
        cb(null, { message: "successful", password: hash })
    })
  })
}

//Compares the password and hashed password

bcryptCompare = (userPassword, hashPassword) => {
  bcrypt.compare(userPassword, hashPassword, function (err, res) {
    if (err) {
      throw err
    } else if (!res) {
      return false
    } else {
      return res
    }
  })
}
module.exports = {
  bcryptCompare, hashPassword, bcrypt
}