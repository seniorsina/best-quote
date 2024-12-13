import { FilterQuery } from "mongoose";

export interface IBaseRepository<T> {
  countByCriteria(criteria: Partial<T>): Promise<number>
  findByCriteria(criteria: FilterQuery<T>): Promise<T[]>;
  findById(id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
  create(entity: T): Promise<T>;
  update(id: string, entity: Partial<T>): Promise<T | null>;
  delete(id: string):Promise<boolean>;
}
