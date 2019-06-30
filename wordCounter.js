const btnCounter = document.getElementById('word');
const counter = document.getElementById('counter');


function wordCounter() {
  palabras =document.getElementById('text').value.split(' ');
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
  console.log('jjj');
  let p2 = document.createElement('p');
  p2.innerHTML +=  obj[palabras[i]];
  counter.appendChild(p2);
}


btnCounter.addEventListener('click', wordCounter);
btnCounter.addEventListener('click', accountResponse);