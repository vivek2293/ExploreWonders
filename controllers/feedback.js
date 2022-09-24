const asyncWrapper = require('../middlewares/asyncWrapper');
const feedScheme = require('../Schema/schema');

const createFeed = asyncWrapper(async(req,res,next) => {
    const feedback = await feedScheme.create(req.body);
    res.status(200);
})

module.exports = createFeed;