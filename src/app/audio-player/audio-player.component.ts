import { Component } from '@angular/core';

@Component({
    selector: 'app-audio-player',
    templateUrl: './audio-player.component.html',
    styleUrls: ['./audio-player.component.css'],
})
export class AudioPlayerComponent {
    sources: any[];

    constructor() {
        this.sources = [
            {
                src:
                    'https://cors-anywhere.herokuapp.com/http://static.videogular.com/assets/audios/videogular.mp3',
                type: 'audio/mp3',
            },
        ];
    }
}
