import { Component, ElementRef, ViewChild } from '@angular/core';
import { ModuloConfig } from '@videogular/ngx-videogular/modulo';

@Component({
    selector: 'app-audio-visualizer',
    templateUrl: './audio-visualizer.component.html',
})
export class AudioVisualizerComponent {
    moduloConfig: ModuloConfig = {
        dimensions: {
            width: 853,
            height: 500,
        },
        fillStyle: 'black',
        strokeStyle: 'white',
        lineWidth: 1.5,
        scaleFactor: 0.8,
    };

    // sources = [
    //     {
    //         src: 'https://cors-anywhere.herokuapp.com/http://static.videogular.com/assets/audios/videogular.mp3',
    //         type: 'audio/mp3',
    //     },
    // ];

    // // 'https://cors-anywhere.herokuapp.com/http://static.videogular.com/assets/audios/videogular.mp3',
    // // 'http://static.videogular.com/assets/audios/videogular.mp3',

    @ViewChild('media', { static: false }) media: ElementRef<HTMLAudioElement>;
}
