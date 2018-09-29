const express = require('express'),
  router = express.Router(),
  passport = require('passport');

router.post('/register', function(req, res) {
  console.log(req.body);
  const { firstName, lastName, email, password } = req.body;
  User.findOne(
    {
      email
    },
    function(err, doc) {
      if (err) {
        res.status(500).send('error occured');
      } else {
        if (doc) {
          res.status(500).send('Username already exists');
        } else {
          const record = new User();
          record.firstName = firstName;
          record.lastName = lastName;
          record.email = email;
          record.password = record.hashPassword(password);
          record.joined = new Date().toDateString();
          record.save(function(err, user) {
            if (err) {
              console.log('db error', err);
              res.status(500).send('db error');
            } else {
              res.json(user);
              res.redirect('/');
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
