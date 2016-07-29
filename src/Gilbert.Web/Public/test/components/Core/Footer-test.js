import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Footer from '../../../components/Core/Footer';

describe('Footer', function () {
    it('should render with a copyright notice', () => {
        const wrapper = shallow(<Footer />);
        const copyright = wrapper.find('.copyright');

        expect(copyright).to.exist;
        expect(copyright.length).to.equal(1);

        const today = new Date();
        const currentYear = today.getFullYear();
        expect(copyright.props().children.valueOf(currentYear)).to.not.equal(-1);
    });
});
