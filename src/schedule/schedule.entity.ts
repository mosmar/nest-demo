import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { PassengerEntity } from 'passenger/passenger.entity';

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

   @OneToMany(type => PassengerEntity, passenger => passenger.schedule, { cascade: true })
   passengers: PassengerEntity[];
}
