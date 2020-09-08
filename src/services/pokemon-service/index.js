import axios from 'axios'

const POKEMON_API_ENDPOINT = "https://pokeapi.co/api/v2/"
const GET_POKEMON_LIST = "pokemon?limit=20"
const GET_POKEMON = "pokemon/"

export async function getPokemonList(endpoint = POKEMON_API_ENDPOINT + GET_POKEMON_LIST) {
    const data = await axios.get(endpoint).then(response => {
        return response.data
    })
    return data
}

export async function getPokemon(pokemonName) {
    const data = await axios.get(POKEMON_API_ENDPOINT+GET_POKEMON+pokemonName).then(response => {
        return response.data
    })
    return data
}