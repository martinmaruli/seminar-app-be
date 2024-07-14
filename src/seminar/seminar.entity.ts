// seminar.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Seminar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  schedule: Date;

  @Column()
  maxParticipants: number;

  @Column({ default: 0 })
  currentParticipants: number;

  @Column()
  createdBy: string; // This should ideally reference User entity
}
