/* ----------------------------------------------------------------------------

Exercício: 028
Enunciado:
    Existe um botão o qual, ao ser clicado, cria 20 números aleatórios entre 1 e 1000.
    Esses números devem ser apresentados cada um em sua própria linha dentro do elemento
    cujo id é igual a "numeros".
---------------------------------------------------------------------------- */

let botao = document.querySelector('[class ^= "btn" ]')
let div = document.querySelector('#numeros')

botao.addEventListener('click', () => {
    div.innerHTML = ''

    for(let i = 0; i < 20; i++){
        let num = Math.floor(Math.random() * 1000) + 1
        div.innerHTML += `${num} <br>`
    }
})