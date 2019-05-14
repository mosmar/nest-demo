import { ScheduleDTO } from './schedule.dto';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ScheduleEntity } from './schedule.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ScheduleService {
   constructor(@InjectRepository(ScheduleEntity) private scheduleRepository: Repository<ScheduleEntity>) { }

   async showAll() {
       return await this.scheduleRepository.find();
   }

   async create(data: ScheduleDTO) {
       const schedule = await this.scheduleRepository.create(data);
       await this.scheduleRepository.save(schedule);
       return schedule;
   }

   async read(id: string) {
       return await this.scheduleRepository.findOne({ where: { id } });
   }

   async update(id: string, data: Partial<ScheduleDTO>) {
       await this.scheduleRepository.update({ id }, data);
       return await this.scheduleRepository.findOne({ id });
   }

   async delete(id: string) {
       await this.scheduleRepository.delete({ id });
       return { deleted: true };
   }
}
