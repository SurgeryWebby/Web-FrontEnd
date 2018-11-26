import React from 'react';
import { Button } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import LogInMenu from '../../../src/main/menu/LogInMenu';

describe('LogInMenu', () => {
    it('should render a button inside a menu', () => {
        const wrapper = shallow(<LogInMenu />);

        expect(wrapper.find(Button)).to.have.lengthOf(1);
    });
});
