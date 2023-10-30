
const db = require("mysql2");

function conectarMsSQL(){
    const connStr = "Server=localhost;Database=aster;User Id=sa;Password=asdasdf;";
    const sql = require("mssql");

    const con = sql.connect(connStr)
        .then(conn => console.log("conectou!"))
        .catch(err => console.log("erro! " + err));

    return con;
}

function conectarMysql(){
    const con = db.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mauFJcuf5dhRMQrjj',
        database: 'pmc'

    }).promise();
    return con;
}

module.exports = { conectarMysql }