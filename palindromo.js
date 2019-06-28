const btnPalindromo = document.getElementById('palíndromo');

function texto() {
  let word = document.getElementById('text').value.toLowerCase();
  word = word.replace(/ /g, "");

  for (var i = 0; i < word.length; i++) {
    if (word[i] != word[word.length - i - 1]) {
      return false;
    }
  }
  return true;

}
function confirmation() {
  if (texto()) {
    let p = document.createElement('p');
    p.innerHTML += 'Esto es palíndromo';
    response.innerHTML = '';
    response.appendChild(p);

  } else {
    let p = document.createElement('p');
    p.innerHTML += 'Esto no es palíndromo';
    response.innerHTML = '';
    response.appendChild(p);

  }
}


btnPalindromo.addEventListener('click', texto);
btnPalindromo.addEventListener('click', confirmation);