var mysql = require("mysql");

var connection = mysql.createConnection({

    host: "47.94.227.12",

    port: "3306",
    
    user: "root",
    
    password:"123456",
    
    database: "admindb",
    
})

function connect() {

    connection.connect((res)=> {
        console.log(res);
        console.log('数据库连接成功！');
    })

}

module.exports = {
    connection,
    connect
}