import { ScheduleDTO } from './schedule.dto';
import { ScheduleService } from './schedule.service';
import { Controller, Get, Post, Put, Delete, Body, Param, UsePipes } from '@nestjs/common';
import { ValidationPipe } from '../shared/validation.pipe';

@Controller('schedule')
export class ScheduleController {

   constructor(private scheduleService: ScheduleService) { }

   @Get()
   showAllSchedules() {
       return this.scheduleService.showAll();
   }

   @Post()
   @UsePipes(new ValidationPipe())
   createSchedule(@Body() data: ScheduleDTO) {
       return this.scheduleService.create(data);
   }

   @Get(':id')
   readSchedule(@Param('id') id: string) {
       return this.scheduleService.read(id);
   }

   @Put(':id')
   @UsePipes(new ValidationPipe())
   updateSchedule(@Param('id') id: string, @Body() data: Partial<ScheduleDTO>) {
       return this.scheduleService.update(id, data);
   }

   @Delete(':id')
   destroySchedule(@Param('id') id: string) {
       return this.scheduleService.delete(id);
   }

}
