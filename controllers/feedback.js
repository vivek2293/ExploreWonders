const asyncWrapper = require('../middlewares/asyncWrapper');

const getFeed = asyncWrapper(async(req,res,next) => {
    console.log(req.body);
    res.status(200).send(req.body);
})

module.exports = getFeed;