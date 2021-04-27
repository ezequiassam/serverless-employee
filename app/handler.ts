import {Context, Handler} from 'aws-lambda';
import {EmployeesController} from './controller/employees-controller';
import {employee} from "./model/employee";
import path from "path";
import * as dotenv from "dotenv";
import mongoose from "mongoose";

const dotenvPath = path.join(__dirname, '../', 'config/.env.dev');
dotenv.config({
  path: dotenvPath,
});

mongoose.connect(process.env.DB_URL, {
  dbName: process.env.DB_NAME,
  useNewUrlParser: true,
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
