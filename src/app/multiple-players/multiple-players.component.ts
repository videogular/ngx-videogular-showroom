import { Component } from '@angular/core';

@Component({
    selector: 'app-multiple-players',
    templateUrl: './multiple-players.component.html',
    styleUrls: ['./multiple-players.component.css'],
})
export class MultiplePlayersComponent {
    sources = [
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
