function clicou(){
let nome = document.querySelector('input#nome')
let sobrenome = document.querySelector('input#sobrenome')
let res = document.querySelector('div#res')
res.innerHTML = `Olá, ${nome} ${sobrenome}, seja bem vindo!`
}