import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import Hello from './Hello';

describe('Hello World', () =>{});

it('renders', ()=>{
  expect(shallow(<Hello />)).toHaveLength(1);
});

it('should render with default Components', () =>{
  const component = shallow(<Hello />);

  expect(component).toIncludeText('Howdy');
  expect(component).toIncludeText('Partner');
});

it('should render with our props', () =>{
  const component = shallow(<Hello friend="Fred"/>);

  expect(component).toIncludeText('Howdy');
  expect(component).not.toIncludeText('Partner');
  expect(component).toIncludeText('Fred');

});

it('should match the snapshot', () =>{
  const component = renderer.create(<Hello friend="Luke"/>);
  expect(component.toJSON()).toMatchSnapshot();
});
