import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import TopWavySvg from '../../../src/main/common/TopWavySvg';

describe('TopWavySvg renders', () => {
    it('should render svg', () => {
        const wrapper = shallow(<TopWavySvg />);
        const expectedResult = (
            <svg
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
                style={{ height: '100%', width: '100%' }}
            >
                <path
                    d="M-103.86,123.84 C212.46,-145.55 323.25,337.00 590.00,-10.36 L592.20,230.42 L-12.02,187.00 Z"
                    style={{ stroke: 'none', fill: '#FFF' }}
                />
            </svg>
        );
        expect(wrapper.contains(expectedResult)).to.equal(true);
    });
});
