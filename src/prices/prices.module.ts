import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PricesService } from './prices.service';
import { Price, Store, Game } from '../entities';

@Module({
  imports: [TypeOrmModule.forFeature([Price, Store, Game])],
  providers: [PricesService],
  exports: [PricesService],
})
export class PricesModule {}
