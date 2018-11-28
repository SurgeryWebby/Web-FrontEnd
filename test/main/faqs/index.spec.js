import React from 'react';
import MessengerMessageUs from 'react-messenger-message-us';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Banner from '../../../src/main/common/Banner';
import FaqsComponent from '../../../src/main/faqs';
import FaqsAccordions from '../../../src/main/faqs/FaqsAccordions';
import '../../../src/main/faqs/index';

describe('FaqsComponent', () => {
    it('should render banner, accordions, messenger message plugin and phone number', () => {
        const wrapper = shallow(<FaqsComponent />);
        const expectedBanner = (
            <Banner
                title="FAQs"
                imagePath="/static/images/about/banner-background.png"
            />
        )
        const expectedMessageButton = (<MessengerMessageUs pageId="334368506922347" appId="1371080042903307" />);
        const expectedPhonenumberDetail = (<p>หรือโทร 02-123-4567</p>);

        expect(wrapper.contains(expectedBanner)).to.equal(true);
        expect(wrapper.contains(<FaqsAccordions />)).to.equal(true);
        expect(wrapper.contains(expectedMessageButton)).to.equal(true);
        expect(wrapper.contains(expectedPhonenumberDetail)).to.equal(true);
    });
});
