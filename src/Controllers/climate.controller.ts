import { Controller, Get, Param } from '@nestjs/common';
import { ClimateService } from '../Services/climate.service';

@Controller('climate')
export class ClimaController {
  constructor(private readonly climateService: ClimateService) {}

  @Get(':city')
  async getClimate(@Param('city') city: string): Promise<any> {
    return this.climateService.getClimate(city);
  }
}
