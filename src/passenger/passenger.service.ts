import { PassengerDTO } from './passenger.dto';
import { PassengerEntity } from './passenger.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScheduleEntity } from 'schedule/schedule.entity';

@Injectable()
export class PassengerService {

   constructor(
       @InjectRepository(PassengerEntity) private passengerRepository: Repository<PassengerEntity>,
       @InjectRepository(ScheduleEntity) private scheduleRepository: Repository<ScheduleEntity>,
   ) { }

   async showAll() {
       return await this.passengerRepository.find();
   }

   async create(scheduleId: string, data: PassengerDTO) {
       const schedule = await this.scheduleRepository.findOne({ where: { id: scheduleId }});
       const passenger = await this.passengerRepository.create({ ...data, schedule });
       await this.passengerRepository.save(passenger);
       return passenger;
   }
}
