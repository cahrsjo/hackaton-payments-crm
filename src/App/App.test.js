import React from 'react';
import RandomQuote from '../RandomQuotes/RandomQuote';
import { shallow, mount, render } from 'enzyme';

describe('<RandomQuote />', () => {
  it('renders a `.quote`', () => {
    const wrapper = shallow(<RandomQuote />);
    console.log('### ', wrapper.debug());
    expect(wrapper.find('div').hasClass('quote'));
  });

  it('counts .quote elements', () => {
    const wrapper = shallow(<RandomQuote />);
    expect(wrapper.find('.quote')).toBeDefined();
    expect(wrapper.find('.quote')).toHaveLength(1);
  });

  it('counts p elements', () => {
    const wrapper = shallow(<RandomQuote />);
    expect(wrapper.find('p')).toBeDefined();
    expect(wrapper.find('p')).toHaveLength(2);
  });
});
