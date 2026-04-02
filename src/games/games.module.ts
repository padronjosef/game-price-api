import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import { Game } from '../entities';

@Module({
  imports: [TypeOrmModule.forFeature([Game]), HttpModule],
  controllers: [GamesController],
  providers: [GamesService],
  exports: [GamesService],
})
export class GamesModule {}
