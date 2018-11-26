import React from 'react';
import { List } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import PhoneAndFB from '../../../src/main/menu/PhoneAndFB';

describe('Phone and FB', () => {
    it('should have number and fb', () => {
        const wrapper = shallow(<PhoneAndFB />);

        expect(wrapper.find(List.Item)).to.have.lengthOf(2);
    });
});
