const mysql = require("mysql2");

function connect(){
    let con = mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: 'mauFJcuf5dhRMQrjj'
        }
    ).promise();
    return con;
}

async function getUsuario(login, senha){

    try {
        const sql = `select * from pmc.usuarios u where u.login = '${login}' and u.senha = '${senha}'`;
        console.log( sql );
        const con = await connect();
        let resultado = await con.query(sql);
        let usuario = resultado[0][0];
        if(login == usuario.login){
            console.log(usuario);
            con.destroy();            
            return true;
        }else{
            return false;
        }
    } catch (error) {
        console.log(error)
        return false;
    }

    

    return true;
}

module.exports = { getUsuario };

