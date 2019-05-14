import { PassengerDTO } from './passenger.dto';
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PassengerService } from './passenger.service';

@Controller('passenger')
export class PassengerController {

   constructor(private passengerService: PassengerService) {}

   @Get()
   showAllPassengers() {
       return this.passengerService.showAll();
   }

   @Post('schedule/:id')
   createPassenger(@Param('id') id: string, @Body() data: PassengerDTO) {
       return this.passengerService.create(id, data);
   }

   @Put(':id')
   updatePassenger(@Param('id') id: string, @Body() data: PassengerDTO) {
       // TODO: fill in if time permits
   }

   @Get(':id')
   readPassenger(@Param('id') id: string) {
       // TODO: fill in if time permits
   }

   @Delete(':id')
   destryPassenger(@Param('id') id: string) {
       // TODO: fill in if time permits
   }
}
