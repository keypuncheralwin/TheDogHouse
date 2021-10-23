




const logMiddleware = (req, res, next) => {
    console.log(`${new Date()} ${req.method} ${req.path}`)
  
  
    next();

  }

module.exports = logMiddleware