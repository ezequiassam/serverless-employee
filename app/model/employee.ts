import { Document, model, models, Schema } from 'mongoose';

export class EmployeeModel {
  id?: number;
  name?: string;
  age?: number;
  role?: string;
}

export interface EmployeeDocument extends Document {
  id: number;
  age: number;
  name: string;
  role: string;
}

const employeeSchema = new Schema({
  id: { type: Number, index: true, unique: true },
  age: Number,
  name: { type: String, required: true },
  role: String,
  createdAt: Date,
}).pre('save', function (next) {
  // @ts-ignore
  if (this._doc) {
    // @ts-ignore
    let doc = <EmployeeDocument>this._doc;
    let now = new Date();
    // @ts-ignore
    if (!doc.createdAt) {
      // @ts-ignore
      doc.createdAt = now;
    }
    // @ts-ignore
    doc.modifiedAt = now;
  }
  next();
  return this;
});

// Note: OverwriteModelError: Cannot overwrite `Employee` model once compiled. error
export const employee = (models.employee || model<EmployeeDocument>('employee', employeeSchema, 'employees'));
