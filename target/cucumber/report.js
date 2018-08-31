$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cofre/AbrirCofre.feature");
formatter.feature({
  "name": "Digitar a senha",
  "description": "  Para evitar erros bobos\n  E ficar sem acesso ao cofre\n  Eu quero saber qual a senha correta",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Digitar seis números",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "que eu digitei \"123456\" no visor do cofre",
  "keyword": "Dado "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "eu aperto o botão enter",
  "keyword": "Quando "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "o resultado na calculadora deve ser \"123456\"",
  "keyword": "Então "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});