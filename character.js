const btnCharacter = document.getElementById('character');


function separar() {
  const cadena = document.getElementById('text').value
  const separador = "";
  
  const arregloDeSubCadenas = cadena.split(separador);
  console.log(arregloDeSubCadenas)

  // function onlyUnique(value, index, self) {
  //   return self.indexOf(value) === index;
  // }

  var unique = new Set(arregloDeSubCadenas);
  console.log(unique);
}





btnCharacter.addEventListener('click', separar);
// btnCharacter.addEventListener('click', responseWord);