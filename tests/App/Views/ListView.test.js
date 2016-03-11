"use extensible"

import React from 'react-native';
import { shallow, mount, render } from 'enzyme';
import ListView from '../../../App/Views/Tabs/ListView';
import { expect } from 'chai';

describe('List View tests', function() {
    it('should render component', () => {
        const wrapper = shallow(<ListView data={[]} />);
        expect(wrapper.length).to.equal(1);
    })
});