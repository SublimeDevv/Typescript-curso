import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('Charmander');

console.log(charmander)
// (Pokemon.prototype as any).customName = 'Pikachu';

charmander.savePokemonToDB(3)