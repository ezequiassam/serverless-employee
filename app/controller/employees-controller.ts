import {Context} from 'aws-lambda';
import {Model} from 'mongoose';
import {MessageUtil} from '../utils/message';
import {EmployeesService} from '../service/employees-service';
import {EmployeeModel} from "../model";

export class EmployeesController extends EmployeesService {
  constructor(employee: Model<any>) {
    super(employee);
  }

  /**
   * Create employee
   * @param {*} event
   */
  async create(event: any, context?: Context) {
    console.log('functionName', context.functionName);
    const params: EmployeeModel = JSON.parse(event.body);

    try {
      const result = await this.createEmployee({
        name: params.name,
        id: params.id,
      });

      return MessageUtil.success(result);
    } catch (err) {
      console.error(err);

      return MessageUtil.error(err.code, err.message);
    }
  }

  /**
   * Update a employee by id
   * @param event
   */
  async update(event: any) {
    const id: number = Number(event.pathParameters.id);
    const body: object = JSON.parse(event.body);

    try {
      const result = await this.updateEmployee(id, body);
      return MessageUtil.success(result);
    } catch (err) {
      console.error(err);

      return MessageUtil.error(err.code, err.message);
    }
  }

  /**
   * Find employee list
   */
  async find() {
    try {
      const result = await this.findEmployee();

      return MessageUtil.success(result);
    } catch (err) {
      console.error(err);

      return MessageUtil.error(err.code, err.message);
    }
  }

  /**
   * Query employee by id
   * @param event
   */
  async findOne(event: any) {
    const id: number = Number(event.pathParameters.id);

    try {
      const result = await this.findOneEmployeeById(id);

      return MessageUtil.success(result);
    } catch (err) {
      console.error(err);

      return MessageUtil.error(err.code, err.message);
    }
  }

  /**
   * Delete employee by id
   * @param event
   */
  async deleteOne(event: any) {
    const id: number = event.pathParameters.id;

    try {
      const result = await this.deleteOneEmployeeById(id);

      if (result.deletedCount === 0) {
        return MessageUtil.error(1010, 'The data was not found! May have been deleted!');
      }

      return MessageUtil.success(result);
    } catch (err) {
      console.error(err);

      return MessageUtil.error(err.code, err.message);
    }
  }
}
