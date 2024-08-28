console.log('Trabalhando com condicionais');
const listaDestinos = new Array('Salvador', 'Sao Paulo', 'Rio de Janeiro');
 
const idadeComprador = 20;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possiveis:");
console.log(listaDestinos);

if(idadeComprador >= 18 || estaAcompanhada ==true){
    console.log("Boa viagem");
    listaDestinos.splice(1,1); //removendo item 
}else {
    console.log("Não é maior de idade, não posso vender");
}


console.log("Embarque: \n\n");
if(idadeComprador >= 18 && temPassagemComprada){;
    console.log("Boa viagem");
}else{
    console.log("Voce nao pode embarcar");

}   
    console.log(listaDestinos);






