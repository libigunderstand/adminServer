var { connection } =  require("./condb.js")


const dbc = {
    getUser: (param)=> {
        return new Promise((resolve,reject)=> {
            let sql = `select * from userinfo where username = '${ param.username }' and password = '${ param.password }'`
            connection.query(sql, (err,result)=>{
                resolve(result)
            });
        })
        
    },
    searchUser: (param)=> {
        return new Promise((resolve,reject)=> {
            let sql = `select username from userinfo where username = '${ param.username }'`
            connection.query(sql, (err,result)=>{
                resolve(result)
            });
        })
    },
    insertUser: (param)=> {
        return new Promise((resolve,reject)=> {
            let sql = `insert into userinfo (usid, username, password) values(null, '${ param.username }', '${ param.password }')`
            connection.query(sql, (err,result)=>{
                resolve(result)
            });
        })
        
    },
}

module.exports = dbc