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

}

// Função que copia o texto criptografado
function copy() {
  let copiedText = document.querySelector("#textArea");
  
  copiedText.select();
  document.execCommand("copy");
  alert("Texto copiado para area de transferência.");
}

