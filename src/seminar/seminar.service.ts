// seminar.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seminar } from './seminar.entity';

@Injectable()
export class SeminarService {
  constructor(
    @InjectRepository(Seminar)
    private readonly seminarRepository: Repository<Seminar>,
  ) {}

  async findAll(): Promise<Seminar[]> {
    return this.seminarRepository.find();
  }

  async create(seminar: Seminar): Promise<Seminar> {
    return this.seminarRepository.save(seminar);
  }

  async update(id: number, updatedSeminar: Seminar): Promise<Seminar> {
    await this.seminarRepository.update(id, updatedSeminar);
    return updatedSeminar;
  }

  async delete(id: number): Promise<void> {
    await this.seminarRepository.delete(id);
  }
}
