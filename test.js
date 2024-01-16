const fs = require('fs')
const path = require('path');
const data = (filePath) => fs.readFileSync(path.join(process.cwd(), filePath), 'utf-8')
const replaceContent = data('./sqlite3-binding.js')
fs.writeFileSync(path.join(process.cwd(), 'node_modules/sqlite3/lib/sqlite3-binding.js'), replaceContent, 'utf-8')
