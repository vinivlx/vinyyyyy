console.log('\n Trabalhando com loops');
const listaDestinos = new Array('Salvador', 'Sao Paulo', 'Rio de Janeiro');
 
const idadeComprador = 20;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";
const podeComprar = idadeComprador >= 18 || estaAcompanhada ==true;

console.log("\n Destinos possiveis:");
console.log(listaDestinos);


let contador = 0; 
let destinoExiste = false;


console.log("Destino existe: ", destinoExiste );

if(podeComprar && destinoExiste){
    console.log("Boa viagem");

}else{
    console.log("Desculpe, tivemos um erro!")
}

for(let i = 0; i < 3; i++){
  
     if(listaDestinos[i] == destino){
        console.log("Destino existe");
        destinoExiste = true;
    }
     
 }



// while(contador < 3){
  
//     if(listaDestinos[contador] == destino){
//         console.log("Destino existe");
//         destinoExiste = true;
//         break;
//     }
//     contador += 1;
// }



