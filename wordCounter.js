const btnCounter = document.getElementById('word');
const response = document.getElementById('response');


function wordCounter(str) {
  palabras = str=document.getElementById('text').value.split(' ');
  obj = [];
  for (i = 0; i < palabras.length; i++) {
    obj[palabras[i]] = 1;
    for (j = 0; j < palabras.length; j++) {
      if (i != j) {
        if (palabras[i] == palabras[j]) {
          obj[palabras[i]]++;
        }
      }
    }
  }

  console.log(obj);
}

function accountResponse() {
  let p = document.createElement('p');
  p.innerHTML += obj;
  response.appendChild(p);
}


btnCounter.addEventListener('click', wordCounter);
btnCounter.addEventListener('click', accountResponse);