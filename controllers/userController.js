const userModel = require('../models/user');


exports.get_home_page = (req, res) => {
  res.render('login');
}
exports.processLogin = (req, res) => {
  console.log(req.fields);
  username = req.fields.Username;
  password = req.fields.Password;
  userModel.login(username, password, (status) => {
    console.log(status);
    if (status) {
      req.session.userid = username;
      res.redirect('/read');
    } else {
      res.status(500).render('fail', "fail message");
    }
  });
}