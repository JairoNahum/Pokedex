import { SafeAreaView} from 'react-native'
import React,{useState, useEffect} from 'react'
import {getPokemonsApi, getPokemonsDetailsByUrlApi} from "../api/pokemon" // importamos el archivo de pokemon que tiene la peticion mediante el método getPokemos
import PokemonList from '../components/PokemonList';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);// usamos el useState poniendo la palabra pokemons y el nombre de la función que tiene el array de pokemons
  const [nextUrl, setNextUrl] = useState(null)
  

  useEffect(()=> {
    (async()=>{
      await loadPokemons();
    })()// funcion anonima autoejecutable
  },[]);// los estados que van en en arreglo vana mandar sobre el useEffect

  const loadPokemons = async () => { // resolver el await de la funcion get pokemon del archivo pokemon de la carpeta api
    try {
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);// aqui esta la siguiente url que se le hace la petición para cargar los siguiente 20 pokemones
      const pokemonsArray = [];
      for await (const pokemon of response.results){ // con el for awaitcreamos una constante que se llama pokemon la cual se relaciona con response.results el cual es objeto que contiene la informacion de la primer llamada ala api
        //console.log(pokemon.url) extraemos nadamas la url 
        const pokemonDetails = await getPokemonsDetailsByUrlApi(pokemon.url);// creamos una constante llamada pokemonsDetails la cual es igual al await para ser más organizados, la cual se iguala a la funcion getPokemonsDetailsByUrlApi y la cual tiene como parametro solo la url, así que cuando pasamos este parametro, podemos mandar llamar los detalles de los pokemon, desde la peticion (funcion)osea el get
        
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default
          
        })
      }

      setPokemons([...pokemons,...pokemonsArray]);


    } catch (error) {
      console.error(error)
      
    }
  }

  return ( 
    <SafeAreaView>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl}/>
    </SafeAreaView>
  )
}