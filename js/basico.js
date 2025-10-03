// mensagem no console 
console.log("Usando Javascript")
//alert("usando Javascript")

//variáveis
let nomeGame = "God of War"
let anoLancamento = 2005
let finalizado = true

//exibir as variaveis
console.log(nomeGame)
console.log(anoLancamento)
console.log(finalizado)

// Concatenação não é legal em javascript
console.log("Nome do game: " + nomeGame + "Finalizado: " + finalizado)

//legal é usar Template String

// Iniciar e terminar com crase
console.log(`Nome do game: ${finalizado} 
    data do lançamento: ${anoLancamento} 
    Jogo finalizado: ${finalizado}`)
    

    nomeGame = "Alex kid"
    console.log(`Nome do game: ${finalizado} 
        data do lançamento: ${anoLancamento} 
        Jogo finalizado: ${finalizado}`)
    

    /*alert(`Nome do Game: ${nomeGame}
data do lançamento: ${anoLancamento}
jogo finalizado: ${finalizado}`);*/

//Constantes = declaramos um valor e esse valor não poderá mudar 

const codigoGame = 9876512
console.log(`Código do game: ${codigoGame}`) 

//arrays (vetores)
const pessoas = ['Eu', 'Tu', 'Ele', 'Nós', 'Vós', 'Eles']
console.log(pessoas)
console.log(pessoas[3])

pessoas[3] = "Tati"
console.log(pessoas)

// Montar um objeto

const jogador = {
    nome: "Pedro Chacon",
    email: "chacon0800@hotmail.com",
    id: 99999,
    logado: false,


    }
    console.log(jogador)
    console.log(jogador.email)
    














