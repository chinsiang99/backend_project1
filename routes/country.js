var express = require('express');
var router = express.Router();
var connection = require('../database.js');
var sanitizeHtml = require('sanitize-html');
const { check, validationResult } = require('express-validator');

/* get all country. */
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

/* get specific country with id. */
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

/* insert new country record */
router.post('/',
    (req, res, next) => {
        const errors = validationResult(req);

        connection
            .raw(`insert into country(country_name) values (?)`, req.body.name)
            .then((result) => {
                var country = result[0];
                if (country.length == 0) {
                    res.json({
                        message: "failed to create a new country"
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
