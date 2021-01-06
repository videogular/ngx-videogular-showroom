import { Component } from '@angular/core';
import {VgApiService, VgFullscreenApiService} from '@videogular/ngx-videogular/core';

@Component({
    selector: 'app-bound-player',
    templateUrl: './bound-player.component.html',
    styleUrls: [ './bound-player.component.css' ]
})
export class BoundPlayerComponent {
    sources: Array<Object>;
    controls = false;
    autoplay = false;
    loop = false;
    preload = 'auto';
    api: VgApiService;
    fsAPI: VgFullscreenApiService;
    nativeFs = true;

    constructor() {
        this.sources = [
            {
                src: 'https://cors-anywhere.herokuapp.com/http://static.videogular.com/assets/videos/videogular.mp4',
                type: 'video/mp4'
            },
            {
                src: 'https://cors-anywhere.herokuapp.com/http://static.videogular.com/assets/videos/videogular.ogg',
                type: 'video/ogg'
            },
            {
                src: 'https://cors-anywhere.herokuapp.com/http://static.videogular.com/assets/videos/videogular.webm',
                type: 'video/webm'
            }
        ];
    }

    onPlayerReady(api: VgApiService) {
        this.api = api;
        this.fsAPI = this.api.fsAPI;
        this.nativeFs = this.fsAPI.nativeFullscreen;

        this.api.getDefaultMedia().subscriptions.ended.subscribe(
            () => {
                // Set the video to the beginning
                this.api.getDefaultMedia().currentTime = 0;
            }
        );
    }

    onChangeNativeFs($event) {
        this.fsAPI.nativeFullscreen = this.nativeFs;
        console.log('onChangeNativeFs', this.fsAPI.nativeFullscreen, this.nativeFs);
    }

    onClickUpdateSource() {
        this.sources = [
            {
                src: 'https://cors-anywhere.herokuapp.com/http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
                type: 'video/mp4'
            },
            {
                src: 'https://cors-anywhere.herokuapp.com/http://static.videogular.com/assets/videos/big_buck_bunny_720p_stereo.ogg',
                type: 'video/ogg'
            }
        ];
    }
}
