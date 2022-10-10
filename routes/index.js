var express = require('express');
var router = express.Router();
var connection = require('../database.js');
const { check, validationResult } = require('express-validator');

/* List manufacturers */
router.get('/manufacturers', function (req, res, next) {
  //knex connection
  connection
    .raw(`select * from manufacturer;`) // it is a promise
    .then(function (result) {
      var manufacturers = result[0];
      // send back the query result as json
      res.json({
        manufacturers: manufacturers,
      });
    })
    .catch(function (error) {
      // log the error
      console.log(error);
      res.json(500, {
        "message": error
      });
    });
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
