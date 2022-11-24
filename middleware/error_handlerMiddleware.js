const expressErrorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode).json({
        status: statusCode,
        error: err.message
    })
};

module.exports = { expressErrorHandler };