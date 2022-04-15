import { StyleSheet, FlatList,ActivityIndicator,Platform} from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard';

export default function PokemonList(props) {
    const {pokemons,loadPokemons,isNext} = props;

    const loadMore = ()=>{
        loadPokemons();
    }

    return (
    <FlatList
        data={pokemons}//es un array de objetos, por eso le pasamos pokemons
        numColumns={2}// cantidad de items por columnas
        showsVerticalScrollIndicator={false}//para que no aparezca una barra de scroll sino simplemente lo hagas
        keyExtractor={(pokemon)=> String(pokemon.id)}
        renderItem={({item})=> <PokemonCard pokemon={item}/>}// mediante render item, pasamos la informacion al archivo PokemonCard
        contentContainerStyle={styles.flatListContentContainer}// mandamos llamar los etilos
        onEndReached={isNext && loadMore}// al llegar al final de la lista ejecuta la funcion
        onEndReachedThreshold={0.1}// que cargue la funcion un poco antes de llegar al final
        ListFooterComponent={
            isNext &&(// para cuando lleguemos al limite de pokemons ya no cargue el spinner
                <ActivityIndicator // nos hace un spinner de carga
                size="large"
                style={styles.spinner}
                />
            )
            
        }

    />
  )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
        marginTop: Platform.OS === "android" ? 30:0, //si estamos en android nos pone un margintop de 30 y en ios uno de 0(si plataform.os es igual a android entonces cargas 30 sino cargas 0)
    },
    spinner:{
        marginTop:20,
        marginBottom: Platform.OS ==="android" ? 90:60, //si estamos en android el marginBottom es de 90 y en ios de 60(si plataform.os es igual a andorid entonces sera de 90 y sino de 60)
        color:"#AEAEAE"

    }
})