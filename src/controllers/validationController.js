let constants = require("../constants/messages");
const { adminDashboard, adminLogin } = require("../constants/pageUrls");

const validateSession = (req, res, next) => {
  var user = req.session;
  if (user.currentUser) {
    return next();
  } else {
    req.session.error = constants.messages.SessionExpired;
    res.redirect(adminLogin);
  }
};
//when login page is calling and if user is already logged in then redirect to admin dashboard page
const checkUserExists = (req, res, next) => {
  const session = req.session;
  if (session.currentUser) {
    // req.session.erro = constants.messages.RedirectToAdminDashboard;
    return res.redirect(adminDashboard);
  }
  next();
};

module.exports = { validateSession, checkUserExists };
