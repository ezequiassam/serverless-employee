import { employee, EmployeeModel } from '../app/model/employee';
import { EmployeesService } from '../app/service/employees-service';

describe('testing service file', () => {
  let modelTest: EmployeeModel;
  let service: EmployeesService;

  beforeAll(() => {
    jest.mock('mongoose');
    modelTest = {
      'id': 1,
      'name': 'nome',
      'age': 20,
      'role': 'test'
    };
    service = new EmployeesService(employee);

  });

  test('findEmployee function', () => {
    employee.find = jest.fn().mockResolvedValue([modelTest]);
    expect(service.findEmployee()).resolves.toEqual([modelTest]);
  });

  test('createEmployee function', () => {
    const spyEmp = jest.spyOn(employee, 'create')
    expect(service.createEmployee(modelTest)).toBeTruthy()
    expect(spyEmp).toBeCalled()
  });

  test('updateEmployee function', () => {
    const spyEmp = jest.spyOn(employee, 'findOneAndUpdate')
    expect(service.updateEmployee(1, {'age': 'surpervisor'})).toBeTruthy()
    expect(spyEmp).toBeCalled()
  });

  test('findOneEmployeeById function', () => {
    const spyEmp = jest.spyOn(employee, 'findOne')
    employee.find = jest.fn().mockResolvedValue([modelTest]);
    expect(service.findOneEmployeeById(1)).resolves.toEqual(modelTest);
    expect(spyEmp).toBeCalled()
  });

  test('deleteOneEmployeeById function', () => {
    const spyEmp = jest.spyOn(employee, 'deleteOne')
    expect(service.deleteOneEmployeeById(1)).toBeTruthy()
    expect(spyEmp).toBeCalled()
  });
});
