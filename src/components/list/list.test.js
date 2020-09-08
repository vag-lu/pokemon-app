import { shallow, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import List from '.';

configure({ adapter: new Adapter() });

describe('List', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<List/>);
        expect(wrapper).toMatchSnapshot();
    })
})