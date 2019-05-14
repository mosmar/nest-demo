import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class ScheduleEntity {
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column({type: 'date'})
   departureTime: Date;

   @Column({type: 'date'})
   arrivalTime: Date;

   @Column('text')
   departureLocation: string;

   @Column('text')
   arrivalLocation: string;
}
