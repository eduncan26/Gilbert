import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Foo from '../../components/foo';

describe('A Suite', function () {
    it('contains spec with an expectation', () => {
        expect(shallow(<Foo />).contains(<div className="foo" />)).to.equal(true);
    });

    it('contains spec with an expectation', () => {
        expect(shallow(<Foo />).is('.foo')).to.equal(true);
    });

    it('contains spec with an expectation', () => {
        expect(mount(<Foo />).find('.foo').length).to.equal(1);
    });
});
