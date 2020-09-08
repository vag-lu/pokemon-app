import { shallow, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import PokemonCard from '.';

configure({ adapter: new Adapter() });

const bulbasaur = {
    name: "bulbasaur",
    id: 1,
    sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    types: [
        {
          slot: 1,
         type: {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/"
          }
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/"
          }
        }
      ],

}

describe('PokemonCard', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<PokemonCard item={bulbasaur}/>);
        expect(wrapper).toMatchSnapshot();
    })
})