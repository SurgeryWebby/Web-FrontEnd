import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import TopWavySvg from '../../../src/main/common/TopWavySvg';

describe('TopWavySvg renders', () => {
    it('renders svg', () => {
        const wrapper = shallow(<TopWavySvg />);
        const expectedResult = <div>Hi</div>;
        expect(wrapper.contains(expectedResult)).to.equal(true);
    });
});
