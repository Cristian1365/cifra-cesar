////////////////////////////CODIGO IMPLEMENTADO NO FRONT-END/////////////////////////////////////////////

/////////// FUNÇOES DE ABREVIAÇAO///////////////
var qs = (e) => document.querySelector(e);
var qsa = (e) => document.querySelectorAll(e);
/////////// FUNÇOES DE ABREVIAÇAO///////////////


////////////VARIABEIS DEA RMAZENAMENTO ///////////////
var alfabeto ="abcdefghijklmnopqrstuvwxyz";
var alfabetoarray = alfabeto.split("");
////////////VARIAVEIS DE ARMAZENAMENTO ///////////////



////////FUNÇAO QUE CRIA O ALFABETO CIFRADO//////////////////////////////////////////////////////////////
alfabetoarray.map((elemento,index) =>{// navega em todo o contedo do alfabetoarray  fazendo as alteraçoes em todos os elementos tmb estraindo o proprio elemento e sua pocisao no array 
    let letraalfabeto = qs(".container-models .letras-descrip").cloneNode(true);//variavel que pega o modelo com as caracteristicas html e css de exiçao e o clona
    letraalfabeto.innerHTML = elemento;//conteudo do clone
    qs(".alfabeto-1").append(letraalfabeto);//adicionando o clone com o valor a area de exibiçao
      letraalfabeto.addEventListener('click',(e)=>{///adicionando evento de click em todos os clones feitos das letras do alfabeto
       e.preventDefault();// previne eventos padroes da funçao
         qs(".alfabeto").innerHTML = "";//limpa a lista anteror feita e passada para a area de exebiçao no front-end //sim e  GAMBIARRA
          chave = index;// pega o index do array acima
            alfabetoarray.map((elemento,index) =>{//navega em todo o alfabeto padrao fazendo as alteraçoes necessarias para gerar o alfabeto cifrado
              if(index+chave <0){
                novaletra =  ((index - chave  )% alfabetoarray.length)//calculo caso a chave ultrapasse negativamente o array
              } else{
                  novaletra = ((index + chave) % alfabetoarray.length)//calculo padrao
                }
                  let letraalfabeto = qs(".container-models .letras-crip").cloneNode(true);//variavel que pega o modelo com as caracteristicas html e css de exiçao e o clona
                    letraalfabeto.innerHTML = alfabetoarray[parseInt(novaletra)];//passando o valor criptografado para ser o conteudo do clone
                      qs(".alfabeto").append(letraalfabeto);//adicionando o clone a respectiva area de exibiçao
            })
      })
        
});
 /////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////FUNÇAO QUE CRIPTOGRAFA OU DISCRIPTOGRAFA  E EXIBE O RESULTADO/////////////////////////////////
qs("button").addEventListener("click",(e) => {
  e.preventDefault();
  let frasearray = qs("#input-cod").value.split("");//pega a frase a ser criptografada ou descriptografada
  let frasedescrip = [];// limpa o conteudo da variavel a cada execucao// PROVAVELMENTE GAMBIARRA
  let frasecrip = [];//limpa o conteudo da variavel a cada execuçao// PROVAVELMENTE GAMBIARRA
  let opçao = qsa("#opçao");//selecionando o elemento
      
      if(opçao[0].checked == true){//confere se a opcao descriptografar esta selecionada
        
        frasearray.map((elemento,index) =>{//calculo para descriptografar
          let elementoindex =parseInt(alfabetoarray.indexOf(elemento));// to com preguiça
            endereço = ((elementoindex - chave) % alfabetoarray.length)// to com preguiça
              if(elementoindex == -1){// to com preguiça
                frasedescrip += elemento// to com preguiça
              }else{// to com preguiça
                  if(endereço <0){// to com preguiça
                    endereço = (((elementoindex - chave )% alfabetoarray.length) +alfabetoarray.length)// to com preguiça
                  }
                  if(endereço > alfabetoarray.length){// to com preguiça
                    endereço = alfabetoarray.length + endereço// to com preguiça
                  }
                    frasedescrip += alfabetoarray[endereço];// to com preguiça
                }
          })
          
                let resultadodescrip = qs(".mensagem-resultado")// seleciona o elemento html  
                  resultadodescrip.innerHTML = frasedescrip;//exibe o resultado no front end
                 
        };

      if(opçao[1].checked == true){// mesma coisa que a funçao acima so que para descriptografar   
         
        frasearray.map((elemento,index) =>{
          let elementoindex =parseInt(alfabetoarray.indexOf(elemento)); 
            endereço = ((elementoindex + chave) % alfabetoarray.length)
              if(elementoindex == -1){
                frasecrip += elemento
              } else{
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
      
});
////////////////////////////////////APENAS BACK-END//////////////////////////////////////////////////////////////////////

/*var chave = parseInt(prompt("chave"));
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
*/
