import { Module } from '@nestjs/common';
import { ClimateService } from "./Services/climate.service";
import { ClimaController } from './Controllers/climate.controller';

@Module({
  imports: [],
  controllers: [ClimaController],
  providers: [ClimateService],
})

export class AppModule {}
