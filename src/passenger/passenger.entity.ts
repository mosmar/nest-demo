import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ScheduleEntity } from 'schedule/schedule.entity';

@Entity()
export class PassengerEntity {
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column('text')
   firstName: string;

   @Column('text')
   lastName: string;

   @Column('text')
   email: string;

   @ManyToOne(type => ScheduleEntity)
   schedule: ScheduleEntity;
}
