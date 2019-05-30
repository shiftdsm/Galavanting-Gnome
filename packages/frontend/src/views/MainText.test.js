import React from 'react';
import { shallow } from 'enzyme';
import MainText from './MainText';

it('renders without crashing', () => {
  shallow(<MainText />);
});
