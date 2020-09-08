import { shallow, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import PokemonList from '.';

configure({ adapter: new Adapter() });

describe('PokemonList', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<PokemonList/>);
        expect(wrapper).toMatchSnapshot();
    })
})