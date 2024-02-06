   
   const btnEncrypt = document.querySelector('.btn btn-primary');
   const btnDecrypt = document.querySelector('.btn btn-default');
   
   
   
   btnEncrypt.onclick = () => {

       const textInput =  document.querySelector('input').value;
       const textOutput = document.querySelector('p');
       const textModalHideTitle = document.querySelector('h4');
       const textModalHideBody = document.querySelector('.modal-body'); 
       const arrayTextInput = textInput.split('');
       const encryptedTextArray = []; 
   
       for (const i of arrayTextInput) {
         if (arrayTextInput[i] === 'a') {
            encryptedTextArray.push('ai');
         }else if (arrayTextInput[i] === 'e') {
            encryptedTextArray.push('enter');
         }else if (arrayTextInput[i] === 'i') {
            encryptedTextArray.push('imes');
         } else if (arrayTextInput[i] === 'o') {
            encryptedTextArray.push('ober');
         } else if (arrayTextInput[i] === 'u') {
            encryptedTextArray.push('ufat');
         } else {
            encryptedTextArray.push(arrayTextInput[i]);
         }
       }

      //  textModalHideTitle / esconda
      //  textModalHideBody / recebe encryptedTextArray
    }

    btnDecrypt.onclick = () => {
       const textInput =  document.querySelector('input').value;
       const textOutput = document.querySelector('p');
       const textModalHideTitle = document.querySelector('h4');
       const textModalHideBody = document.querySelector('.modal-body');
    }
    