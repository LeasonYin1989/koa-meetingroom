
const util = require('../utility')

exports.getAllData = async (ctx) => {
    try {
        let result = await dao.getAllData(ctx);
        ctx.body = util.resultSuccessJson(undefined, undefined, result);
    }
    catch (err) {
        ctx.body = util.resultErrorJson(undefined, err, {});
    }
};