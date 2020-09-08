import React, { useEffect, useState } from 'react'
import { getPokemonList, getPokemon } from '../../services/pokemon-service'
import List from '../../components/list';
import PokemonCard from '../../components/pokemon-card';
import useInfiniteScroll from '../../components/infinite-scroll';
import SearchNavbar from '../../components/search-navbar';
import './index.scss'

const PokemonList = () => {

    const [nextPokemonList, setNextPokemonList] = useState("");
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonListFiltered, setPokemonListFiltered] = useState([]);
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
    const [isLoading, setIsLoading] = useState(true);
    const [toSearch, setToSearch] = useState("");

    function fetchMoreListItems() {
        if (nextPokemonList) {
            getPokemonList(nextPokemonList).then((data) => {
                setNextPokemonList(data.next);
                completePokemonData(data.results);
            })
        } else {
            setIsLoading(false);
        }
    }

    function completePokemonData(list) {
        let newList = list.map(async (pokemon) => {
            return getPokemon(pokemon.name)
        })
        Promise.all(newList)
            .then(results => {
                const newListResults = pokemonList.concat(results)
                setPokemonList(newListResults);
                if (toSearch !== "") {
                    setPokemonListFiltered(newListResults.filter((pokemon) => filterCondition(pokemon, toSearch)))
                } else {
                    setPokemonListFiltered(newListResults)
                }
                setIsLoading(false);
                setIsFetching(false);
            })
            .catch(e => {
                console.error(e);
            })
    }

    function filterCondition(pokemon, value) {
        return pokemon.name.includes(value) || pokemon.id.toString().includes(value) || applyFilterToTypes(pokemon.types, value)
    }

    function applyFilterToTypes(types, value) {
        return types.some((slot) => {
            return slot.type.name.includes(value)
        })
    }

    function onSearchChange(event) {
        const value = event.target.value;
        setToSearch(value);
    }

    function onButtonSearchClick() {
        setIsLoading(true)
        const newList = pokemonList.filter((pokemon) => filterCondition(pokemon, toSearch.toLowerCase()))
        setPokemonListFiltered(newList);
    }

    function fillPage() {
        let element = document.getElementById("pokemon-list");
        let area = element.getBoundingClientRect();
        if (area.bottom < (window.innerHeight || element.clientHeight)) {
            setIsLoading(true);
            fetchMoreListItems();
        } else {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (pokemonList.length === 0) {
            getPokemonList().then((data) => {
                setNextPokemonList(data.next);
                completePokemonData(data.results);
            })
        }
    }, [])

    useEffect(() => {
        fillPage()
        console.log(pokemonListFiltered.length)
    }, [pokemonListFiltered])

    return (
        <div>
            <SearchNavbar toSearch={toSearch} onSearchChange={onSearchChange} onButtonSearchClick={onButtonSearchClick} />
            <div id="pokemon-list" className="content">
                {pokemonListFiltered &&
                    <List list={pokemonListFiltered}>
                        <PokemonCard />
                    </List>
                }
            </div>
            {(isFetching || isLoading) && <div className="loading-container"><img className="loading" src="pokeball.png"></img></div>}
        </div>
    )
}

export default PokemonList