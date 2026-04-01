

/* Faça o fork do projeto no github cnone para sua máquina e crie o arquivo do projeto, todos os artefatos de código desenvolvidos terão que ser
entregues via pull request.*/

// 1 - uma variável e uma constante (1 ponto)

// 2 - Concatene a var/const e adicione srings (1 ponto) 

// 3 - interpole a var const adicionando strings (1 ponto)

// 4 - Use os operadores lógicos AND OR NOT e as estruturas condicionais (3,5 ponto)

// 5 - crie um switch e case para o desafio da equipe (3,5 ponto)



// 1
const saudacao = "Olá "; 
var nome = "Rodrigo";
console.log( saudacao + "Sr " + nome + " tenha um bom dia!");

console.log(`${saudacao} Sr ${nome} tenha um bom dia!`);





/* Equipe 3. Fazer uma compra online
Analogia: A compra só é finalizada se tiver saldo no cartão E o endereço de entrega estiver preenchido. */

//AND 
let SaldoNoCartao = true;
let EnderecoPreenchido = true;
if(SaldoNoCartao && EnderecoPreenchido){
    console.log("compra realizada com sucesso!");
}else{
    console.log("compra não realizada!");
}
//OR
let saldonocartao = true;
let enderecopreenchido = false;
if(saldonocartao || enderecopreenchido){
    console.log("Compra Realizada Com Sucesso!");
}else{
    console.log("Compra Não realizada!");
}

//NOT
let SaldocartaO = false;
let EnderecopreenchidO = false;
if(!SaldocartaO || Enderecopreenchido){
    console.log("COMPRA REALIZADA!");
}else{
    console.log("compra não realizada")
}


//5 switch
let nota = 2;

switch(nota){
    case 1:
        console.log("Rodrigo nota:10");
        break;
    case 2:
    console.log("Blenda nota:10");
    break;
    case 3:
        console.log("Gean nota:10");
        break;
        default:
            console.log("aluno não encontrado");
}

//Equipe 3: Rodrigo Campos. Blenda Kettlen e Gean Carlos.