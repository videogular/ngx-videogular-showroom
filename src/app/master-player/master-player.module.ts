import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterPlayerComponent } from './master-player.component';
import { VgPipComponent } from './vg-pip/vg-pip.component';
import { FormsModule } from '@angular/forms';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgCoreModule } from '@videogular/ngx-videogular/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        VgCoreModule,
        VgControlsModule,
        VgBufferingModule,
    ],
    declarations: [MasterPlayerComponent, VgPipComponent],
})
export class MasterPlayerModule {}
