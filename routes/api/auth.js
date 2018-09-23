const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post(
  '/login',
  passport.authenticate('local-signup', {
    successRedirect: '/', // redirect to the secure profile section
    failureRedirect: '/login', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  })
);

router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/'
  }),
  (req, res) => {
    res.send('Hi');
  }
);

module.exports = router;
