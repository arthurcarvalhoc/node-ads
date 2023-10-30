var express = require('express');
const { fazerLogin } = require('../repository/usuarioRepositor');
var router = express.Router();
const labRepository = require('../repository/laboratorioRepository')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sign-in', { });
});

router.get('/laboratorios', function(req, res, next) {
  res.render('laboratoriosPage', { });
});

router.post('/createLab', function(req, res, next) {

  let {nome, capacidade, computadores} = req.body;

  if(labRepository.criarLab(nome, capacidade, computadores)){
    res.render('laboratoriosPage', { msg: true });
  }else{
    res.render('laboratoriosPage', { msg: false });
  }

});

router.post('/autenticar', async function(req, res, next) {
  let { login, senha } = req.body; 

  console.log( req.body );

  if( await fazerLogin(login, senha)){
    res.render('home', {  });
  }else{
    res.render('sign-in', { erroLogin: true });
  }

  router.post('/laboratorios', async function(req, res, next) {
    
    let { nome, capacidade, computadores } = req.body;

    const repository = require('../repository/laboratorioRepository')

    const success = await repository.criarLab(nome, capacidade, computadores);

    res.render('dashboard', { });
  });
  

});



module.exports = router;
