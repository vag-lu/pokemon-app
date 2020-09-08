import { shallow, configure } from 'enzyme';
import SearchNavbar from '.';
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SearchNavbar', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SearchNavbar />);
    expect(wrapper).toMatchSnapshot();
  });
});