import { EmployeeModel } from '../model/employee';

export class EmployeesService {
  private employee: any;

  constructor(employee: any) {
    this.employee = employee;
  }

  /**
   * Create employee
   * @param params
   */
  public async createEmployee(params: EmployeeModel): Promise<object> {
    try {
      return await this.employee.create(params);
    } catch (err) {
      console.error(err);

      throw err;
    }
  }

  /**
   * Update a employee by id
   * @param id
   * @param data
   */
  public updateEmployee(id: number, data: object) {
    return this.employee.findOneAndUpdate(
      { id },
      { $set: data },
      { new: true },
    );
  }

  /**
   * Find employee
   */
  public findEmployee() {
    return this.employee.find();
  }

  /**
   * Query employee by id
   * @param id
   */
  public findOneEmployeeById(id: number) {
    return this.employee.findOne({ id });
  }

  /**
   * Delete employee by id
   * @param id
   */
  public deleteOneEmployeeById(id: number) {
    return this.employee.deleteOne({ id });
  }
}
