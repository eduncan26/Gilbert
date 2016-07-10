import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Footer from '../../components/Core/Footer';

describe('Footer', function () {
    it('should have the current year', () => {
        const footer = new Footer();
        const date = new Date();
        const currentYear = date.getFullYear();

        expect(footer.currentYear).to.equal(currentYear);
    });
});
