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

async function consultarLab(){

    try {
        const con = await db.conectarMysql();
        const consulta = 'SELECT * FROM laboratorios l';
        const resultado = await con.query(consulta);
        const listaLabs = resultado[0];
        return listaLabs;
        
    } catch (error) {
        console.log(error);
        return false;
    }

}

async function apagarLab(id){

    try {
        const con = await db.conectarMysql();
        const consulta = `delete from laboratorios where id = ${id}`
        await con.execute(consulta);
        return true;
        
    } catch (error) {
        console.log(error);
        return false;
    }

}


module.exports = { criarLab, consultarLab, apagarLab };