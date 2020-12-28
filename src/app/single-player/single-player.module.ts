import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePlayerComponent } from './single-player.component';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';

@NgModule({
    imports: [
        CommonModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule,
    ],
    declarations: [SinglePlayerComponent],
})
export class SinglePlayerModule {}
