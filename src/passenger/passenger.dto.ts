import { IsString, IsEmail } from 'class-validator';

export class PassengerDTO {
    @IsString()
    firstName: string;
    @IsString()
    lastName: string;
    @IsEmail()
    email: string;
}
