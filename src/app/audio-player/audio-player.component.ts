import { Component } from '@angular/core';

@Component({
    selector: 'app-audio-player',
    templateUrl: './audio-player.component.html'
})
export class AudioPlayerComponent {
    sources = [{
        src: 'https://cors-anywhere.herokuapp.com/http://static.videogular.com/assets/audios/videogular.mp3',
        type: 'audio/mp3',
    }];

    // 'https://cors-anywhere.herokuapp.com/http://static.videogular.com/assets/audios/videogular.mp3',
    // 'http://static.videogular.com/assets/audios/videogular.mp3',
}
