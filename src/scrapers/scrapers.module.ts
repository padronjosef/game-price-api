import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ScrapersService } from './scrapers.service';
import { SteamScraper } from './providers/steam.scraper';
import { CheapSharkScraper } from './providers/cheapshark.scraper';
import { InstantGamingScraper } from './providers/instantgaming.scraper';

@Module({
  imports: [HttpModule],
  providers: [
    ScrapersService,
    SteamScraper,
    CheapSharkScraper,
    InstantGamingScraper,
  ],
  exports: [ScrapersService],
})
export class ScrapersModule {}
