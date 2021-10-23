const ensureAuth = (req, res, next) => {
    if (!req.session.name) {
        res.status(401).send();
    } else {
        next();
    }
  }
  
  module.exports = ensureAuth; 