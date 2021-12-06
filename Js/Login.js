
var btnEntrar = document.querySelector("#entrar");
var btnCadastar = document.querySelector("#cadastrar");

var body = document.querySelector("body");

btnEntrar.addEventListener("click", function() {
    body.className = "Entrar-js";
});

btnCadastar.addEventListener("click", function() {
    body.className = "Cadastrar-js";
});