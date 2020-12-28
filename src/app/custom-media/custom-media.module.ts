import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMediaComponent } from './custom-media.component';
import { FormsModule } from '@angular/forms';
import { SvgViewerComponent } from './svg-viewer/svg-viewer.component';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgCoreModule } from '@videogular/ngx-videogular/core';

@NgModule({
    imports: [CommonModule, FormsModule, VgCoreModule, VgControlsModule],
    declarations: [CustomMediaComponent, SvgViewerComponent],
})
export class CustomMediaModule {}
