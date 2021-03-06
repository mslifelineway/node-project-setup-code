
exports.clearsession = function (req, res, next) {
  req.session.error = "";
  req.session.success = "";
  res.send("ok");
};

exports.logout = function (req, res, next) {
  req.session.destroy();
  res.redirect("/");
};
