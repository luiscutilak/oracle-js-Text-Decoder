const input_text = document.querySelector();
const input_mensagem = document.querySelector();

let matriz_code = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
]

function btnEncripted() {

}

function criptografar(string) {
    const resultado = string
    .replaceAll("a", "ai")
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("u", "afat");

    return resultado;
}

function descriptografar(string) {
    const resultado = string
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

}


let test = "texto de teste";
let testCriptografado = "tenterxtober denter tenterstenter";

console.log(criptografar(test));