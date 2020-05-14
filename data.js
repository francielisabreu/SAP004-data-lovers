export const pokemon = (data) => {
  const pokemonImage = data.pokemon.map((imageTake) => {
    return imageTake.img;
  });
  return pokemonImage;
};

export const anotherExample = () => {
  return "OMG";
};
