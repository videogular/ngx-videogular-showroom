import { Component } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';

export interface IMedia {
    title: string;
    src: string;
    type: string;
}

@Component({
    selector: 'app-smart-playlist',
    templateUrl: './smart-playlist.component.html',
    styleUrls: ['./smart-playlist.component.css'],
})
export class SmartPlaylistComponent {
    playlist: Array<IMedia> = [
        {
            title: 'Pale Blue Dot',
            src: 'https://cors-anywhere.herokuapp.com/http://static.videogular.com/assets/videos/videogular.mp4',
            type: 'video/mp4',
        },
        {
            title: 'Big Buck Bunny',
            src:
                'https://cors-anywhere.herokuapp.com/http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
            type: 'video/mp4',
        },
        {
            title: 'Elephants Dream',
            src:
                'https://cors-anywhere.herokuapp.com/http://static.videogular.com/assets/videos/elephants-dream.mp4',
            type: 'video/mp4',
        },
    ];

    currentIndex = 0;
    currentItem: IMedia = this.playlist[this.currentIndex];
    api: VgApiService;

    onPlayerReady(api: VgApiService) {
        this.api = api;

        this.api
            .getDefaultMedia()
            .subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));

        this.api
            .getDefaultMedia()
            .subscriptions.ended.subscribe(this.nextVideo.bind(this));
    }

    nextVideo() {
        this.currentIndex++;

        if (this.currentIndex === this.playlist.length) {
            this.currentIndex = 0;
        }

        this.currentItem = this.playlist[this.currentIndex];
    }

    playVideo() {
        this.api.play();
    }

    onClickPlaylistItem(item: IMedia, index: number) {
        this.currentIndex = index;
        this.currentItem = item;
    }
}
