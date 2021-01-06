import { Component } from '@angular/core';

@Component({
    selector: 'app-google-ima-player',
    templateUrl: './google-ima-player.component.html',
    styleUrls: ['./google-ima-player.component.css'],
})
export class GoogleImaPlayerComponent {
    sources: any[];

    constructor() {
        this.sources = [
            {
                src: 'https://cors-anywhere.herokuapp.com/http://static.videogular.com/assets/videos/videogular.mp4',
                type: 'video/mp4',
            },
            {
                src: 'https://cors-anywhere.herokuapp.com/http://static.videogular.com/assets/videos/videogular.ogg',
                type: 'video/ogg',
            },
            {
                src: 'https://cors-anywhere.herokuapp.com/http://static.videogular.com/assets/videos/videogular.webm',
                type: 'video/webm',
            },
        ];
    }
}
