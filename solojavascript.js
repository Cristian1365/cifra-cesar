
////////////////////////////////////APENAS BACK-END//////////////////////////////////////////////////////////////////////
/////////// FUNÇOES DE ABREVIAÇAO///////////////
var qs = (e) => document.querySelector(e);
var qsa = (e) => document.querySelectorAll(e);
/////////// FUNÇOES DE ABREVIAÇAO///////////////


var alfabeto ="abcdefghijklmnopqrstuvwxyz";
var alfabetoarray = alfabeto.split("");


///////////////////////////////////////////////////////
qs("button").addEventListener("click",(e) => {
    let frasecrip = [];
    let frasedescrip = [];
    let chave =parseInt(qs("#chave").value);
    let frasearray = qs("#input-cod").value.toLowerCase().split("");

    let opçao = qsa("#opçao")

  if(opçao[1].checked == true){
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
          var resultadocrip = qs(".mensagem-resultado")
          resultadocrip.innerHTML = frasecrip;
  }  

  if(opçao[0].checked == true){
    frasearray.map((elemento,index) =>{
      let elementoindex =parseInt(alfabetoarray.indexOf(elemento));
        endereço = ((elementoindex - chave) % alfabetoarray.length)
        if(elementoindex == -1){
          frasedescrip += elemento
        }else{
            if(endereço <0){
              endereço = (((elementoindex - chave )% alfabetoarray.length) +alfabetoarray.length)
          }
            if(endereço > alfabetoarray.length){
            endereço = alfabetoarray.length + endereço
          }
            frasedescrip += alfabetoarray[endereço];
            
        }
        
    })
        var resultadodescrip = qs(".mensagem-resultado")
        resultadodescrip.innerHTML = frasedescrip;
  }
})





