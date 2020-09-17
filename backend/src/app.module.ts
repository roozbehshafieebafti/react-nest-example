import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathController } from './math/math.controller';
import { CalculationService } from './calculation/calculation.service';

@Module({
      imports: [],
      controllers: [AppController, MathController],
      providers: [AppService, CalculationService],
})
export class AppModule {}
