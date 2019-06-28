function contarPalabras(str){
  palabras = str.split(' ');
  obj = new Array();
  for(i=0 ; i<palabras.length; i++){
      //Ya encontro la primera, entonces sumo
      obj[palabras[i]] = 1;
      for(j=0; j<palabras.length; j++){
        //Evitamos que se cuente de nuevo
        if(i != j){
         if(palabras[i] == palabras[j]){
           obj[palabras[i]]++;
          }
        }
      }
  }
  alert("Hola: "+obj['hola']);
  alert("pepe: "+obj['pepe']);
  alert("me: "+obj['me']);  
}