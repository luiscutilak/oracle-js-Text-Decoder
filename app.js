let textInput = document.querySelector('#focusedInput');
let outInput = document.querySelector('#textArea');


function encrypt() {
   
   let text = textInput.value;
   let encryptedWord = text
   .replace(/a/g, "ai")
   .replace(/e/g, "enter")
   .replace(/i/g, "imes")
   .replace(/o/g, "ober")
   .replace(/u/g, "ufat");
   //Atualize conteúdo do elemento #textArea com o texto criptografado
   let outInput = document.getElementById('textArea')
   outInput.innerHTML = encryptedWord;
   
  //  outInput.innerHTML = `<textarea readonly id="focusedInput">${encryptedWord}</textarea>
  //  <a href="#" id="copy-btn" onclick="copy()">Copiar</a>`;

}

function decrypt() {

  let text = textInput.value;
  let decryptedWord = text
  .replace(/ai/g, "a")
  .replace(/enter/g, "e")
  .replace(/imes/g, "i")
  .replace(/ober/g, "o")
  .replace(/ufat/g, "u");

  let outInput = document.getElementById('textArea')
    outInput.innerHTML = decryptedWord;

  // `<textarea readonly id="focusedInput">${decryptedWord}</textarea>
  // <a href="#" id="copy-btn" onclick="copy()">Copiar</a>`;

}

// Função que copia o texto criptografado
function copy() {
  let textoCopiado = document.querySelector("#textArea");
  console.log(textoCopiado);
  textoCopiado.select();
  document.execCommand("copy");
  alert("Texto copiado para area de transferência.");
}

