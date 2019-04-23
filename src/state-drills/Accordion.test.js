import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Accordion from './Accordion';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';


describe('Accordian Component', () => {
    const sections = [
        {
          title: 'Section 1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          title: 'Section 2',
          content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
          title: 'Section 3',
          content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
    ]

    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Accordion />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders no sections active by default', () => {
        const wrapper = shallow(<Accordion sections={sections} />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    })

    it('opens a clicked section', () => {
        const wrapper = shallow(<Accordion sections={sections} />);
        wrapper.find('button').at(1).simulate('click');
        expect(toJSON(wrapper)).toMatchSnapshot();
    })

    it('only opens the last section when multiple have been clicked', () => {
        const wrapper = shallow(<Accordion sections={sections} />);
        wrapper.find('button').at(1).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        expect(toJSON(wrapper)).toMatchSnapshot();
    })

})