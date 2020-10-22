var chave = parseInt(prompt("chave"));
var frasearray = prompt("frase").split("")


var alfabeto ="abcdefghijklmnopqrstuvwxyz";
var alfabetoarray = alfabeto.split("");
var frasecrip = [];
var frasedescrip = [];

var alfabetocrip = [];
///////////////////////////////////////////////////////


// ENCRIPTAÇÃO
frasearray.map((elemento,index) =>{
  let elementoindex =parseInt(alfabetoarray.indexOf(elemento)); 
   endereço = ((elementoindex + chave) % alfabetoarray.length)
    if(elementoindex == -1){
      frasecrip += elemento
    }else{
      if(endereço <0){
      endereço = (((elementoindex + chave )% alfabetoarray.length) +alfabetoarray.length)
      }
      if(endereço > alfabetoarray.length){
      endereço = alfabetoarray.length - endereço
   }
  frasecrip += alfabetoarray[endereço];
}
})

//DECRIPTAÇÃO
frasearray.map((elemento,index) =>{
  let elementoindex =parseInt(alfabetoarray.indexOf(elemento));

  endereço = ((elementoindex - chave) % alfabetoarray.length)
  if(elementoindex == -1){
    frasedescrip += elemento
  }
  else{
    if(endereço <0){
    endereço = (((elementoindex - chave )% alfabetoarray.length) +alfabetoarray.length)
  }
    if(endereço > alfabetoarray.length){
      endereço = alfabetoarray.length + endereço
  }
  frasedescrip += alfabetoarray[endereço];
}
})



//ALFABETO CRIPTOGRAFADO
alfabetoarray.map((elemento,index) =>{
  if(index+chave <0){
    novaletra =  ((index - chave  )% alfabetoarray.length)
  }else{
    novaletra = ((index + chave) % alfabetoarray.length)
  }
  
  alfabetocrip.push(alfabetoarray[parseInt(novaletra)]);

});



console.log(frasecrip);
console.log(frasedescrip);
console.log(alfabetocrip);
































/*var chave = parseInt(prompt("chave"));
var frasearray = prompt("frase").split("")


var alfabeto ="abcdefghijklmnopqrstuvwxyz";
var alfabetoarray = alfabeto.split("");
var frasecrip = [];
var frasedescrip = [];

var alfabetocrip = [];
///////////////////////////////////////////////////////
var qs = (e)=> window.document.querySelector(e);

// ENCRIPTAÇÃO
frasearray.map((elemento,index) =>{
  let elementoindex =parseInt(alfabetoarray.indexOf(elemento)); 
   endereço = ((elementoindex + chave) % alfabetoarray.length)
    if(elementoindex == -1){
      frasecrip += elemento
    }else{
      if(endereço <0){
      endereço = (((elementoindex + chave )% alfabetoarray.length) +alfabetoarray.length)
      }
      if(endereço > alfabetoarray.length){
      endereço = alfabetoarray.length - endereço
   }
  frasecrip += alfabetoarray[endereço];
}
})

//DECRIPTAÇÃO
frasearray.map((elemento,index) =>{
  let elementoindex =parseInt(alfabetoarray.indexOf(elemento));

  endereço = ((elementoindex - chave) % alfabetoarray.length)
  if(elementoindex == -1){
    frasedescrip += elemento
  }
  else{
    if(endereço <0){
    endereço = (((elementoindex - chave )% alfabetoarray.length) +alfabetoarray.length)
  }
    if(endereço > alfabetoarray.length){
      endereço = alfabetoarray.length + endereço
  }
  frasedescrip += alfabetoarray[endereço];
}
})



//ALFABETO CRIPTOGRAFADO
alfabetoarray.map((elemento,index) =>{
  if(index+chave <0){
    novaletra =  ((index - chave  )% alfabetoarray.length)
  }else{
    novaletra = ((index + chave) % alfabetoarray.length)
  }
  alfabetocrip.push(alfabetoarray[parseInt(novaletra)]);

});



console.log(frasecrip);
console.log(frasedescrip);
console.log(alfabetocrip);
*/








































































    

