const errors = require('restify-errors');

module.exports = function applyPrefix(prefix) {
    return async (req, res, next) => {

        let url = req.url;
        let apiPrefix = prefix;
        let apiPrefixCount = (apiPrefix).length;

        let urlPrefix = url.substring(0, apiPrefixCount);

        if(!(urlPrefix == apiPrefix)){
            return next(new errors.NotFoundError(`${req.url} does not exist`));
        }

        url = url.substring(apiPrefixCount)
        req.url = url
        
        next();
    };
};
