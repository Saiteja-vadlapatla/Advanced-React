const { forwardTo } = require("prisma-binding");

const Query = {
    // dogs(parent, args, ctx, info) {
    //     return global.dogs;
    // }
    // items(parent, args, ctx, info) {
    //     return ctx.db.query.items();
    // }
    items: forwardTo('db')
};

module.exports = Query;
