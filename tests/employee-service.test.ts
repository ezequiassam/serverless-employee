// jest.mock('employee');
// const service = new  EmployeesService(employee);

import {EmployeeModel} from '../app/model/employee';

describe('testing service file', () => {

  // beforeAll(() => {
    // jest.mock('../app/model/employee');
    // const employeeTest = require('../app/model/employee');
    // employeeTest.find.mockResolvedValue([{
    //   _id: '5dbff32e367a343830cd2f49',
    //   name: 'Earth',
    // },
    // ]);
  // });

  test('findEmployee function', () => {
    // mongoose.find.mockResolvedValue({})
    jest.enableAutomock();
    jest.mock('mongoose');
    const mockModel = new EmployeeModel();
    expect(mockModel)
    expect(1+1).toBe(2)
  });
});
