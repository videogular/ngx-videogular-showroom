import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgModuloModule } from '@videogular/ngx-videogular/modulo';
import { AudioVisualizerComponent } from './audio-visualizer.component';

@NgModule({
    imports: [
        CommonModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule,
        VgModuloModule,
    ],
    declarations: [AudioVisualizerComponent],
})
export class AudioVisualizerModule {}
