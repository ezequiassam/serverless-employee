import {Document, model, Schema} from "mongoose";

export class EmployeeModel {
  id: number;
  name: string;
  age?: number;
  role?: string;
}

export interface EmployeeDocument extends Document {
  id: number
  age: number,
  name: string,
  role: string,
}

const employeeSchema = new Schema({
  id: {type: Number, index: true, unique: true},
  age: Number,
  name: {type: String, required: true},
  role: String,
  createdAt: Date
}).pre('save', function (next) {
  if (this._doc) {
    let doc = <EmployeeDocument>this._doc;
    let now = new Date();
    if (!doc.createdAt) {
      doc.createdAt = now;
    }
    doc.modifiedAt = now;
  }
  next();
  return this;
});


export default model<EmployeeDocument>('Employee', employeeSchema, process.env.DB_EMPLOYEE_COLLECTION);


