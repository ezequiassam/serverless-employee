import {Context, Handler} from 'aws-lambda';
import dotenv from 'dotenv';
import path from 'path';
import {EmployeesController} from './controller/employees-controller';
import employee from "./model/employee";

const dotenvPath = path.join(__dirname, '../', `config/.env.${process.env.NODE_ENV}`);
dotenv.config({
  path: dotenvPath,
});

const employeesController = new EmployeesController(employee);

export const create: Handler = (event: any, context: Context) => {
  return employeesController.create(event, context);
};

export const update: Handler = (event: any) => employeesController.update(event);

export const find: Handler = () => employeesController.find();

export const findOne: Handler = (event: any) => {
  return employeesController.findOne(event);
};

export const deleteOne: Handler = (event: any) => employeesController.deleteOne(event);
