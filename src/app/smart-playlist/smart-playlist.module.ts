import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartPlaylistComponent } from './smart-playlist.component';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgCoreModule } from '@videogular/ngx-videogular/core';

@NgModule({
  imports: [CommonModule, VgCoreModule, VgControlsModule, VgBufferingModule],
  declarations: [SmartPlaylistComponent],
})
export class SmartPlaylistModule {}
