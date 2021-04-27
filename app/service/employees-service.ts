import { Model } from 'mongoose';
import { EmployeeModel } from '../model/employee';

export class EmployeesService {
  private employee: Model<any>;

  constructor(employee: Model<any>) {
    this.employee = employee;
  }

  /**
   * Create employee
   * @param params
   */
  protected async createEmployee(params: EmployeeModel): Promise<object> {
    try {
      return await this.employee.create({
        name: params.name,
        id: params.id,
      });
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
  protected updateEmployee(id: number, data: object) {
    return this.employee.findOneAndUpdate(
      { id },
      { $set: data },
      { new: true },
    );
  }

  /**
   * Find employee
   */
  protected findEmployee() {
    return this.employee.find();
  }

  /**
   * Query employee by id
   * @param id
   */
  protected findOneEmployeeById(id: number) {
    return this.employee.findOne({ id });
  }

  /**
   * Delete employee by id
   * @param id
   */
  protected deleteOneEmployeeById(id: number) {
    return this.employee.deleteOne({ id });
  }
}
