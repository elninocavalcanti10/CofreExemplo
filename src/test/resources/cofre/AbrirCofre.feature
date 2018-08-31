# language: pt
# Source: http://github.com/aslakhellesoy/cucumber/blob/master/examples/i18n/pt/features/adicao.feature
# Updated: Tue May 25 15:52:12 +0200 2010
Funcionalidade: Digitar a senha
  Para evitar erros bobos
  E ficar sem acesso ao cofre
  Eu quero saber qual a senha correta

  Cenário: Digitar seis números
    Dado que eu digitei "123456" no visor do cofre
    Quando eu aperto o botão enter
    Então o resultado na calculadora deve ser "123456"
