const express = require("express");

const router = express.Router();
const userMongoController = require("../controllers/userMongoController");



router.post('/add', userMongoController.addUser, (req,res) =>{
  console.log('finished')
  res.send(res.locals.user)
})

router.get('/login', userMongoController.login, (req,res) => {
  res.send(res.locals.user)
})


router.get('/userbucket', userMongoController.find, (req,res) =>{
  res.send(res.locals.bucket)
})
module.exports = router;
