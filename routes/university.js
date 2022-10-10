var express = require('express');
var router = express.Router();
var connection = require('../database.js');
const { check, validationResult } = require('express-validator');

/* GET all university. */
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

/* GET university with id */
router.get('/:id',
    check('id', "Invalid route param").isInt(),
    function (req, res, next) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        connection
            .raw(`select * from university where id = ?`, req.params.id)
            .then((result) => {
                var university = result[0];
                console.log(university);
                if (university.length == 0) {
                    res.json({
                        message: "no record found"
                    })
                } else {
                    res.json({
                        universitry: university
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

/* GET university with id */
router.post('/',
    function (req, res, next) {
        connection
            .raw(`insert into `, req.params.id)
            .then((result) => {
                var university = result[0];
                console.log(university);
                if (university.length == 0) {
                    res.json({
                        message: "no record found"
                    })
                } else {
                    res.json({
                        universitry: university
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



module.exports = router;
