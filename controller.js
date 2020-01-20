const fs = require('fs')
const path = require('path')
var router = require('koa-router')

function addMapping(router, mapping) {  
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register url mapping :GET ${path}`);
        } else if (url.startsWith('POST ')) {
            router.post(path, mapping[url]);
            console.log(`register url mapping:Post ${path}`);
        }
    }
}

function addController(router, dir) {
    fs.readdirSync(path.join(__dirname, dir)).filter((f) => {
        return f.endsWith('.js');
    }).forEach((f) => {
        console.log(`Processing controller:${f}...`);         
        let mapping = require(path.join(__dirname, dir, f));
        addMapping(router, mapping);
    });
}

module.exports = function (dir) {
    let controller_dir = dir || 'controller';
    router = require('koa-router')();

    addController(router, controller_dir);
    return router.routes();
}