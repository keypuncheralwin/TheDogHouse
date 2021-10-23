const errorHandler = function(err, req, res, next) {
    // Do logging and user-friendly error message display
    let status = err.status || 500
    let message = err.message || 'something went wrong'

    res.status(status).json({ message })

    next(err)
 }

module.exports = errorHandler