var express = require('express');
var router = express.Router();
var connection = require('../database.js');
var sanitizeHtml = require('sanitize-html');
const { check, validationResult } = require('express-validator');

/* GET all country. */
router.get('/', function (req, res, next) {
    connection
        .raw(`select * from university`)
        .then((result) => {
            var university = result[0];
            res.json({
                universitry: university
            });
        })
        .catch((error) => {
            console.log(error);
            res.json(500, {
                "message": error
            })
        })
});


module.exports = router;
