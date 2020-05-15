import { pokemon, filterByName } from "./data.js";
import data from "./data/pokemon/pokemon.js";

let figure = document.querySelector(".pokemonFigure");

//let retornoPokemon = pokemon(data);
//figura.innerHTML=retornoPokemon.join("<br/> ") ;
for (let pokemonTotal in data.pokemon) {
  // figura.innerHTML+='<img src="'+retornoPokemon[imagem]+'"/>'
  let img = document.createElement("img");
  let name = document.createElement("p");
  let type = document.createElement("p");
  let num = document.createElement("p");
  let div = document.createElement("div");
  name.innerHTML = data.pokemon[pokemonTotal].name;
  type.innerHTML = data.pokemon[pokemonTotal].type;
  num.innerHTML = data.pokemon[pokemonTotal].num;
  img.setAttribute("src", data.pokemon[pokemonTotal].img);
  div.classList.add("cardPokemon");
  div.appendChild(name);
  div.appendChild(type);
  div.appendChild(num);
  div.appendChild(img);
  figure.appendChild(div);
}

console.log();

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add("show");
  modal.addEventListener("click", (evento) => {
    if (
      evento.target.id === modalId ||
      evento.target.className === "close cardPokemon"
    ) {
      modal.classList.remove("show");
    }
  });
}
const cardPokemon = document.querySelector(".cardPokemon");
cardPokemon.addEventListener("click", () => openModal("modal"));
