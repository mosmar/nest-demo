import { Module } from '@nestjs/common';
import { PassengerController } from './passenger.controller';
import { PassengerService } from './passenger.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassengerEntity } from './passenger.entity';
import { ScheduleEntity } from 'schedule/schedule.entity';

@Module({
 imports: [TypeOrmModule.forFeature([PassengerEntity, ScheduleEntity])],
 controllers: [PassengerController],
 providers: [PassengerService],
})
export class PassengerModule {}