var express = require('express');
var router = express.Router();
var connection = require('../database.js');
var sanitizeHtml = require('sanitize-html');
const { check, validationResult } = require('express-validator');

/* GET all country. */
router.get('/', (req, res, next) => {
    connection
        .raw(`select * from country`)
        .then((result) => {
            var country = result[0];
            res.json({
                country: country
            });
        })
        .catch((error) => {
            console.log(error);
            res.json(500, {
                "message": error
            })
        })
});

/* GET all country. */
router.get('/:id',
    check('id', "Invalid route param").isInt(),
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        connection
            .raw(`select * from country where id = ?`, req.params.id)
            .then((result) => {
                var country = result[0];
                if (country.length == 0) {
                    res.json({
                        message: "no record found"
                    })
                } else {
                    res.json({
                        country: country
                    });
                }

            })
            .catch((error) => {
                console.log(error);
                res.json(500, {
                    "message": error
                })
            })
    });


module.exports = router;
