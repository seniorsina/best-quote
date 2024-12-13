import { FilterQuery, Model, Types } from "mongoose";
import { IBaseRepository } from "../../domain/interfaces/base-repository.interface";

export abstract class BaseRepository<T> implements IBaseRepository<T> {
  constructor(private readonly model: Model<any>) {}
  countByCriteria(criteria: Partial<T>): Promise<number> {
    return this.model.countDocuments(criteria as any).exec();
  }

  findByCriteria(criteria: FilterQuery<T>): Promise<T[]> {
    return this.model.find(criteria).exec();
  }

  async findById(id: string): Promise<T | null> {
    const objectId = Types.ObjectId.isValid(id) ? new Types.ObjectId(id) : id;
    return this.model.findById(objectId).exec();
  }
  async findAll(): Promise<T[]> {
    return this.model.find().exec();
  }
  async create(entity: T): Promise<T> {
    const newEntity = new this.model(entity);
    const savedEntity = await newEntity.save();
    return savedEntity.toObject() as T;
  }
  async update(id: string, entity: Partial<T>): Promise<T | null> {
    const objectId = Types.ObjectId.isValid(id) ? new Types.ObjectId(id) : id;
    return this.model.findByIdAndUpdate(objectId, entity).exec();
  }
  async delete(id: string): Promise<boolean> {
    const objectId = Types.ObjectId.isValid(id) ? new Types.ObjectId(id) : id;
    const deleted = await this.model.findByIdAndDelete(objectId).exec();
    return deleted !== null;
  }
}
