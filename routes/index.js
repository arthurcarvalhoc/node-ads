var express = require('express');
var router = express.Router();
const repository = require("../repository/usuarioRepository")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', async (req, res, next)=>{
  console.log(req.body);

  let { login, senha }= req.body;

  if(await repository.getUsuario(login, senha) ){
    res.render('welcome', {usuario: login})
  }else{
    res.render('error', {message: 'usuário inválido'})
  }

 
});


module.exports = router;
