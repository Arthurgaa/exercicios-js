/*CRIE UM ALGORITMO QUE LEIA UMA LISTA E RETORNE DUAS NOVAS LISTAS CONTENDO NUMEROS PARES E NUMEROS IMPARES
OBS. A LISTA DEVE CONTER NUMEROS DE 1 A 9 E USAR A ESTRUTURA DE REPETIÇÃO FOR */

//DECLARANDO AS VARIAVEIS

let listaNumeros=[1,2,3,4,5,6,7,8,9];
let pares=[];
let impares=[];


for(let numeros of listaNumeros){
    if(numeros % 2 == 0){
        pares.push(numeros);
    }else{
        impares.push(numeros);
    }
}
console.log(pares)
console.log(impares)

/* PROFESSOR DE KARATE MIYAGI SAM TEM UMA LISTA DE ALUNOS(OBJETOS) QUE CONTEM NOME, NOTA1 E NOTA2, POIS ELE PRECISA QUE REALIZE O CALCULO DA MEDIA DAS NOTAS, E MOSTRAR O NOME DO ALUNO E A MEDIA DE CADA ALUNO */

const listaKaratecas=[
    {nome:"Huguinho",notas:[5,6]},
    {nome:"Zezinho",notas:[7,8]},
    {nome:"Luizinho",notas:[4,8]}
]
for (let alunos of listaKaratecas){
    let media=(alunos.notas[0] + alunos.notas[1])/2;
    //INTERPOLAÇÃO/STRINGS LITERAIS/TEMPLAITS STRINGS
    console.log(`A MEDIA DO ALUNO ${alunos.nome} é ${media}`)
}

/*VOCÊ FOI CONVIDADO PARA DESENVOLVER UM ALGORITMO PARA UM BINGO DE TERCEIRA IDADE ,É PRECISO FAZER O SORTEIO COM 6 NUMEROS ENTRE 1 E 6 DE FORMA ALEATORIA */

let sorteio =[];
while(sorteio.length <6){
    let numero =Math.ceil(Math.random()*60)
    if(numero){
        sorteio.push(numero)
    }
}
console.log(sorteio)

/*CRIE UM ALGORITMO QUE GERE A PORCENTAGEM DE UM NUMERO*/

function calcularPorcentagem(num,porcent){
    return (num/100)*porcent;
}
console.log(calcularPorcentagem(50,15))
