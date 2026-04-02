import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { ScrapersModule } from '../scrapers/scrapers.module';
import { GamesModule } from '../games/games.module';
import { PricesModule } from '../prices/prices.module';

@Module({
  imports: [ScrapersModule, GamesModule, PricesModule],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
