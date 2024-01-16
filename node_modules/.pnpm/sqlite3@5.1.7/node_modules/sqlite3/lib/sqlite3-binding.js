const nodeInfo = require('bindings')('node_sqlite3.node');
console.log(nodeInfo, '打包')
module.exports = nodeInfo
