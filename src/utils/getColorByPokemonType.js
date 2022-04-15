import{POKEMON_TYPE_COLORS} from "./constants";

const getColorByPokemonType =(type)=> POKEMON_TYPE_COLORS[type.toLowerCase()];//buscara el tipo de pokemon que es y devolvera el color que tenemos en el archivo constants

export default getColorByPokemonType;