import { IsDate, IsNotEmpty } from 'class-validator';

export class ScheduleDTO {

    @IsDate()
    arrivalTime: Date;
    @IsDate()
    departureTime: Date;
    @IsNotEmpty()
    arrivalLocation: string;
    @IsNotEmpty()
    departureLocation: string;
}
