import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import MenuDefault from '../../../src/main/menu/index';
import TopMenu from '../../../src/main/menu/TopMenu';
import NavigationMenu from '../../../src/main/menu/NavigationMenu';

describe('Menu bar', () => {
    it('renders top menu and navigation menu', () => {
        const wrapper = shallow(<MenuDefault />);

        expect(wrapper.find(TopMenu)).to.have.lengthOf(1);
        expect(wrapper.find(NavigationMenu)).to.have.lengthOf(1);
    });
});
