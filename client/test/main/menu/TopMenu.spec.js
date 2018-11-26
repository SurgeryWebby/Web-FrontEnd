import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import TopMenu from '../../../src/main/menu/TopMenu';
import PhoneAndFB from '../../../src/main/menu/PhoneAndFB';
import Language from '../../../src/main/menu/Language';

describe('Top menu', () => {
    it('has one phone & fb and language selction', () => {
        const wrapper = shallow(<TopMenu />);

        expect(wrapper.find(PhoneAndFB)).to.have.lengthOf(1);
        expect(wrapper.find(Language)).to.have.lengthOf(1);
    });
});
