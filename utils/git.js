//拉取远程仓库主分支最新代码
var Git = require("nodegit");
var fs = require('fs')
const GITPATH = "https://github.com/libigunderstand/reactadmin.git"
const DIR = "reactadmin"

console.log('拉取远程代码……');
Git.Clone(GITPATH, DIR).then(function(repository) {
    
});

Git.Repository.open(`../${DIR}`)
    .then(function(message) {

    });