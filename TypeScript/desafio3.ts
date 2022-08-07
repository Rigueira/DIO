let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
campoSaldo.innerHTML = '';
function somarAoSaldo(soma){
    campoSaldo.innerHTML += parseFloat(soma.value);
}
function limparSaldo(){
    campoSaldo.innerHTML = '';
}
botaoAtualizar.addEventListener('click', function (){
    somarAoSaldo(soma);
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

/*
<h4>Valor a ser adicionado: <input id="soma"> </h4>
<button id="atualizar-saldo">Atualizar saldo</button>
<button id="limpar-saldo">Limpar seu saldo</button>
<h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
