import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleImaPlayerComponent } from './google-ima-player.component';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgImaAdsModule } from '@videogular/ngx-videogular/ima-ads';

@NgModule({
    imports: [
        CommonModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgImaAdsModule,
    ],
    declarations: [GoogleImaPlayerComponent],
})
export class GoogleImaPlayerModule {}
