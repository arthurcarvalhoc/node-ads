const db = require('./db');

async function criarLab(nome, capacidade, computodores) {

    try {
        const con = await db.conectarMysql();
        let sql = `INSERT INTO pmc.laboratorios ( nome, capacidade, computadores) VALUES ('${nome}', ${capacidade}, ${computodores})`
        await con.execute(sql);
        con.destroy();
        console.log("inseriu");
        return true;        
    } catch (error) {
        con.destroy();
        console.log("error");
        return false;
    }
}

module.exports = { criarLab };