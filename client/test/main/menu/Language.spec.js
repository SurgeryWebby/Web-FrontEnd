import React from 'react';
import { List } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Language from '../../../src/main/menu/Language';

describe('Language', () => {
    it('should have 2 languages selectable', () => {
        const wrapper = shallow(<Language />);

        expect(wrapper.find(List.Item)).to.have.lengthOf(2);
    });
});
