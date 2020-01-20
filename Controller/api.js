const products = require('../Model/products')

const APIError = require('../rest')

module.exports = {
    'GET /api/products': async (ctx, next) => {
        ctx.rest({
            products: products.getProducts()
        });
    }


    

}