import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleController } from './schedule.controller';

describe('Schedule Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ScheduleController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ScheduleController = module.get<ScheduleController>(ScheduleController);
    expect(controller).toBeDefined();
  });
});
