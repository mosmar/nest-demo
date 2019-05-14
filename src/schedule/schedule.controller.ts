import { ScheduleDTO } from './schedule.dto';
import { ScheduleService } from './schedule.service';
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('schedule')
export class ScheduleController {

   constructor(private scheduleService: ScheduleService) { }

   @Get()
   showAllSchedules() {
       return this.scheduleService.showAll();
   }

   @Post()
   createSchedule(@Body() data: ScheduleDTO) {
       return this.scheduleService.create(data);
   }

   @Get(':id')
   readSchedule(@Param('id') id: string) {
       return this.scheduleService.read(id);
   }

   @Put(':id')
   updateSchedule(@Param('id') id: string, @Body() data: Partial<ScheduleDTO>) {
       return this.scheduleService.update(id, data);
   }

   @Delete(':id')
   destroySchedule(@Param('id') id: string) {
       return this.scheduleService.delete(id);
   }

}
