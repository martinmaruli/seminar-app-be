// seminar.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Seminar } from './seminar.entity';
import { SeminarService } from './seminar.service';

@Controller('seminars')
export class SeminarController {
  constructor(private readonly seminarService: SeminarService) {}

  @Get()
  async findAll(): Promise<Seminar[]> {
    return this.seminarService.findAll();
  }

  @Post('create')
  async create(@Body() seminar: Seminar): Promise<{ message: string }> {
    await this.seminarService.create(seminar);
    return { message: 'Seminar created successfully' };
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updatedSeminar: Seminar): Promise<{ message: string }> {
    await this.seminarService.update(id, updatedSeminar);
    return { message: 'Seminar updated successfully' };
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<{ message: string }> {
    await this.seminarService.delete(id);
    return { message: 'Seminar deleted successfully' };
  }
}
