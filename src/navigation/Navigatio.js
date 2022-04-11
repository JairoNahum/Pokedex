import React from 'react'
import {Image} from "react-native"//importamos el componente image para poder usar imagenes externas 
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Icon from "react-native-vector-icons/FontAwesome5"// importamos los iconos
import FavoriteNavigation from './FavoriteNavigation'
import PokedexNavigation from './PokedexNavigation'
import AccountNavigation from './AccountNavigation'


const Tab = createBottomTabNavigator();


export default function Navigatio() {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Favorite' component={FavoriteNavigation } options={{
            tabBarLabel: "Favoritos",
            tabBarIcon: ({color,size})=> ( // aquí ponemos esta propiedad para el icono, traemos los props de tabbaricon y por erso ponemos color y size para que se iguale 
                <Icon name='heart' color={color} size={size}/>//aqui ponemos el nombre del icnono, color y tamaño, color y size son igual a color y size para que se igualen al color predeterminado 
            )
        }}/>

        <Tab.Screen name='Pokedex' component={PokedexNavigation } options={{
            tabBarLabel: "",
            tabBarIcon: ()=> renderPokeball()
        }}/>

        <Tab.Screen name='Account' component={AccountNavigation} options={{
            tabBarLabel: "Mi Cuenta",
            tabBarIcon:({color,size})=>(
                <Icon name="user" color={color} size={size} />
            )
        }} />
    </Tab.Navigator>
  )
}

function renderPokeball(){ //funcion que nos va aretornar la imagen que necesitamos de la pokeball
    return(
        <Image 
            source={require('../assets/pokeball.png')} // esta propiedad nos permite poner la ruta donde se encuentra nuestra imagen
            style={{width:75,height:75,top:-15}}
        />
    )
}