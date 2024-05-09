
const express = require('express')
const router = express.Router()
const passport=require('passport')
var FacebookStrategy= require('passport-facebook').Strategy

const loginController= require('../app/controllers/LoginController')

router.get('/facebook', passport.authenticate('facebook'));
router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }),loginController.loginBack);

module.exports = router;
