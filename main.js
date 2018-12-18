const show = require('./show');
require('./main.css');//文件私有loader，处理权限应该高于module.rules.use
require('./index.css');
show('webpack');