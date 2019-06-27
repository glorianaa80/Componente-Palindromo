const btnCharacter = document.getElementById('character');

let character = [];

function wordThatDontRepeats() {
  let word = document.getElementById('text').value;
  console.log(word);
  let lowerCase = word.toLowerCase();
  for (let x = 0; x < word.length; x++) {
    let actualCharacter = word.charAt(x).toLowerCase();
    if (lowerCase.indexOf(actualCharacter) === lowerCase.lastIndexOf(actualCharacter)) {
    }
  }
  character.push(word);
  console.log(character);
}



btnCharacter.addEventListener('click',wordThatDontRepeats);

  /* pruebas.forEach(prueba => {
  //   console.log(`Primera letra que no se repite en '${prueba}': '${primeraLetraQueNoSeRepite(prueba)}'`);
 });
 */