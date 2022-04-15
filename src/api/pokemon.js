import {API_HOST} from "../utils/constants";

export async function getPokemonsApi(endpointUrl) {
    try {
        //peticion a la api
        const url = `${API_HOST}/pokemon?limit=20&offset=0`;// que va a tener un limite de 20 pokemoes por página y mostrará desde el pokemon 0, si no ponemos un limite traera toda la informacion (construimos la url)
        const response = await fetch(endpointUrl || url);//(ejecutamos la peticion HTTP al servidor) response que se tiene que resolver, al cual le pasamos un fetch con la url
        const result = await response.json() //(recuperamos los datos que nos devuelve en un json) devuelve los datos en un jason
        return result// retornamos el result que esta en json
    } catch (error) {
        throw error;
    }
}

export async function getPokemonsDetailsByUrlApi(url){
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }

}

export async function getPokemonsDetailsApi(id){
    try {
        const url=`${API_HOST}/pokemon/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}