import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoundPlayerComponent } from './bound-player.component';
import { FormsModule } from '@angular/forms';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
    ],
    declarations: [BoundPlayerComponent],
})
export class BoundPlayerModule {}
