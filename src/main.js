import { pokemon } from './data.js';
import data from './data/pokemon/pokemon.js';

let figura = document.querySelector(".pokemonFigura");

//let retornoPokemon = pokemon(data);
//figura.innerHTML=retornoPokemon.join("<br/> ") ;
for (let pokemonTotal in data.pokemon){
  // figura.innerHTML+='<img src="'+retornoPokemon[imagem]+'"/>'
  let img = document.createElement("img")
  let name = document.createElement("p")
  let type = document.createElement("p")
  let div = document.createElement("div")
  name.innerHTML=data.pokemon[pokemonTotal].name
  type.innerHTML=data.pokemon[pokemonTotal].type
  img.setAttribute('src',data.pokemon[pokemonTotal].img)
  div.classList.add("cardPokemon")
  div.appendChild(name)
  div.appendChild(type)
  div.appendChild(img)
  figura.appendChild(div)

}

console.log();
