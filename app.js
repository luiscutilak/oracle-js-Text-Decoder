const textInput = document.querySelector("#focusedInput");
const outInput = document.querySelector("#textArea");

function encrypt() {
   const text = textInput.value;

   const codedWord = text
   .replace(/a/g, "ai")
   .replace(/e/g, "enter")
   .replace(/i/g, "imes")
   .replace(/o/g, "ober")
   .replace(/u/g, "ufat");

   document.getElementById('textArea')
   .innerHTML = '<input readonly id="focusedInput">' 
   + codedWord + 
  '<' + '<a class="btn-copy" id="copy-btn" onclick="copy()">Copiar</a>'  
}