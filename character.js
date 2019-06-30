const btnCharacter = document.getElementById('character');
// const response = document.getElementById('response');
// let character = [];

function separar() {
  let cadena = document.getElementById('text').value
  let separador = "";
  let arregloDeSubCadenas = cadena.split(separador);
  console.log(arregloDeSubCadenas)

  // function onlyUnique(value, index, self) {
  //   return self.indexOf(value) === index;
  // }

  var unique = new Set(arregloDeSubCadenas);
  console.log(unique);
}





btnCharacter.addEventListener('click', separar);
// btnCharacter.addEventListener('click', responseWord);