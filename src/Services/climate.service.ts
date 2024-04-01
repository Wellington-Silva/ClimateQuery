import axios from 'axios';
import { config } from 'dotenv';
import { Injectable } from '@nestjs/common';

config();

@Injectable()
export class ClimateService {
  async getClimate(city: string): Promise<any> {
    const apiKey = process.env.apiKey;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao obter clima: ${error.message}`);
    }
  }
}
