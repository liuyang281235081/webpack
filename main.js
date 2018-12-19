const show = require('./show');
require('./main.css');//文件私有loader，处理权限应该高于module.rules.use
require('./index.css');
const mymodule = require('module1');
show('webpack');
mymodule('自定义模块搜索目录');