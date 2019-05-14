import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
