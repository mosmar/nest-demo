import { Test, TestingModule } from '@nestjs/testing';
import { PassengerController } from './passenger.controller';

describe('Passenger Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [PassengerController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: PassengerController = module.get<PassengerController>(PassengerController);
    expect(controller).toBeDefined();
  });
});
