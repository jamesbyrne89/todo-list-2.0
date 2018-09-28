const express = require('express'),
  router = express.Router(),
  passport = require('passport');


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
