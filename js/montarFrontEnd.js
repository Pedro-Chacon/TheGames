//importar os objetos q serão manipulados no front-end
//import {  } from "module";
import { games } from "./objetos.js"; //LEMBRA DO .js NO FINAL

// Montagem dos cards de Games


// pegar o grid que recebrá os cards, nesse caso é  o id grid-cards, armazenar em uma variável

const gridCards = document.getElementById('grid-cards')

// Percorrer o array games e para cada game ele irá criar um card dentro do HMTL
// Vamos usar o forEach

games.forEach(game => {

// O Javascript irá escrever qualquer coisa dentro do HTML do ID grid cards
// Inclusivo escreverá um conjunto de tags  para montar  os nossos cards
gridCards.innerHTML += ` 
            <div class="col my-4">
                <div class="card card-game">
                    <a href="" class="text-decoration-none">
                        <img src="${game.imagem}" class="card-img-top" alt="imagem do game 1">
                        <div class="card-body-game">
                            <h4 class="text-light display-6 ">${game.nome}</h4>
                            <div class="d-flex justify-content-between mt-4">
                                <p class="text-light">${game.plataformas}</p>
                                <p class="text-light fw-bolder">R$${game.preco.toFixed(2)}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
`

})




















