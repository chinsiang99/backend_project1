var express = require('express');
var router = express.Router();
var connection = require('../database.js');
var sanitizeHtml = require('sanitize-html');
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

/* insert new university record */
router.post('/',
    (req, res, next) => {
        connection
            .raw(`insert into university(university_name, country) values (?,?)`, [req.body.university_name, req.body.country_id])
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

/* update existing university record */
router.put('/:id',
    check('id', "Invalid route param").isInt(),
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        connection
            .raw(`select * from university where id = ?`, req.params.id)
            .then((result) => {
                var count = result[0];
                if (count.length > 0) {
                    connection
                        .raw(`update university set university_name = ?, country = ? where id = ? `, [req.body.university_name, req.body.country, req.params.id])
                        .then((result) => {
                            var count = result[0];
                            return res.json({
                                message: count
                            })
                        })
                        .catch((error) => {
                            return res.status(500).json({
                                message: error
                            })
                        })
                } else {
                    return res.json({
                        message: "No specific record found"
                    })
                }
            })
    });

/* delete existing country record with id */
router.delete('/:id',
    check('id', "Invalid route param").isInt(),
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        connection
            .raw(`select * from university where id = ?`, req.params.id)
            .then((result) => {
                var count = result[0];
                if (count.length > 0) {
                    connection
                        .raw(`delete from university where id = ? `, [req.params.id])
                        .then((result) => {
                            var count = result[0];
                            return res.json({
                                message: count
                            })
                        })
                        .catch((error) => {
                            return res.status(500).json({
                                message: error
                            })
                        })
                } else {
                    return res.json({
                        message: "No specific record found"
                    })
                }
            })
    });



module.exports = router;
