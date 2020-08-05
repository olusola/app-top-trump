import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('button Component', () => {

    it('should render button', () => {
        const renderProps = {
            handleClick: jest.fn(),
            label: 'demo'
        }

        const wrapper  = shallow(<Button {...renderProps}/>)
        expect(wrapper.find('Button').length).toBe(1)
        wrapper.find('Button').simulate('click')
        expect(wrapper.find('Button').props().onClick).toHaveBeenCalled()
    })
})