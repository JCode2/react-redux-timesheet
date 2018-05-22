import React from 'react';
import EmployeeRow from './EmployeeRow';
import { shallow } from 'enzyme';

describe('Employee Row Component: ', () => {
  it('implement me', () => {
    expect(true).toBe(true);
  });
});

it('should instantiate the employee table', (){
  const employee = {
    username:'fflinstone',
    email: 'fred.flinstone@slateqarry.com',
    firstName: 'Fred',
    lastName: 'Flinstone',
    admin: true,
  };

  const component = shallow(<EmployeeRow employee{employee}/>);

  expect(component).toContainReact(<td>Flinstone</td>);
  expect(component).toContainReact(<td>fflinstone</td>)
  expect(component).toContainReact(<td>Yes</td>)
});
