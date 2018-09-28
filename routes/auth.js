const express = require('express'),
  router = express.Router(),
  passport = require('passport');

router.post('/register', function(req, res) {
  console.log(req.body);
  var body = req.body,
    username = body.username,
    password = body.password;
  User.findOne(
    {
      username: username
    },
    function(err, doc) {
      if (err) {
        res.status(500).send('error occured');
      } else {
        if (doc) {
          res.status(500).send('Username already exists');
        } else {
          var record = new User();
          record.username = username;
          record.password = record.hashPassword(password);
          record.save(function(err, user) {
            if (err) {
              res.status(500).send('db error');
            } else {
              res.redirect('/login');
            }
          });
        }
      }
    }
  );
});

router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/',
    successRedirect: '/'
  }),
  (req, res) => {
    return res.send('Hi');
  }
);

module.exports = router;
