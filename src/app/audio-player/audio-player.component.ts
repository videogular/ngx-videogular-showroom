import { Component, ElementRef, ViewChild } from '@angular/core';
import NgModulo from 'ng-modulo';

@Component({
    selector: 'app-audio-player',
    templateUrl: './audio-player.component.html',
    styleUrls: ['./audio-player.component.css'],
})
export class AudioPlayerComponent {
    private _audioAnalyser: NgModulo;
    private _ctx: CanvasRenderingContext2D;

    sources: any[];

    @ViewChild('media', {static: false}) media: ElementRef<HTMLAudioElement>;
    @ViewChild('waveCanvas', {static: false}) waveCanvas: ElementRef<HTMLCanvasElement>;

    constructor() {
        this.sources = [
            {
                src:
                    'https://cors-anywhere.herokuapp.com/http://static.videogular.com/assets/audios/videogular.mp3',
                type: 'audio/mp3',
            },
        ];
    }

    // 'https://cors-anywhere.herokuapp.com/http://static.videogular.com/assets/audios/videogular.mp3',
    // 'http://static.videogular.com/assets/audios/videogular.mp3',

    public startVisualizer() {
        if (!this._audioAnalyser) {
            this._audioAnalyser = new NgModulo(this.media.nativeElement);
            this._ctx = this.waveCanvas.nativeElement.getContext('2d');
            this.waveCanvas.nativeElement.width = 853;
            this.waveCanvas.nativeElement.height = 500;
        }

        this.update();
    }

    public update() {
        const audioFreq = this._audioAnalyser.waveform();

        // Clear canvas
        this._ctx.fillStyle = 'black';
        this._ctx.fillRect(
            0, 0,
            this.waveCanvas.nativeElement.width,
            this.waveCanvas.nativeElement.height
        );

        // Set line style
        const scaleFactor = 0.8;

        this._ctx.strokeStyle = 'white';
        this._ctx.lineWidth = 1.5;

        // Draw frequency lines
        this._ctx.beginPath();
        this._ctx.moveTo(
            0,
            this.waveCanvas.nativeElement.height / 2 - audioFreq[0] * scaleFactor
        );

        for (let i = 0; i < audioFreq.length; i++) {
            this._ctx.lineTo(
                (this.waveCanvas.nativeElement.width / audioFreq.length) * i,
                this.waveCanvas.nativeElement.height / 2 - audioFreq[i] * scaleFactor
            );
        }

        this._ctx.moveTo(
            0,
            this.waveCanvas.nativeElement.height / 2 + audioFreq[0] * scaleFactor
        );

        for (let i = 0; i < audioFreq.length; i++) {
            this._ctx.lineTo(
                (this.waveCanvas.nativeElement.width / audioFreq.length) * i,
                this.waveCanvas.nativeElement.height / 2 + audioFreq[i] * scaleFactor
            );
        }

        this._ctx.stroke();

        window.requestAnimationFrame(() => this.update());
    }
}
