const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const { models } = require('mongoose');

router.get('/', (req,res)=>{
  try{
      res.render('applications/index.ejs')
  } catch {
      console.error()
  }
})

router.get('/new', async (req, res) => {
    res.render('applications/new.ejs');
  });
module.exports = router;