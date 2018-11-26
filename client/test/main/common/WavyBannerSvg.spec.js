import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import WavyBannerSvg from '../../../src/main/common/WavyBannerSvg';

describe('WavyBannerSvg', () => {
    it('should render svg', () => {
        const wrapper = shallow(<WavyBannerSvg />);
        const expectedResult = (
            <svg
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
                style={{ height: '100%', width: '100%' }}
            >
                <path
                    d="M-26.60,146.53 C192.05,36.02 283.16,217.59 541.91,116.94 L516.39,170.22 L0.00,150.00 Z"
                    style={{ stroke: 'none', fill: 'white' }}
                />
            </svg>
        );

        expect(wrapper.contains(expectedResult)).to.equal(true);
    });
});
