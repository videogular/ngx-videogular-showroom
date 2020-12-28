import { Component, OnInit, ViewChild } from '@angular/core';
import {
    IDRMLicenseServer,
    VgApiService,
    BitrateOptions,
} from '@videogular/ngx-videogular/core';
import {
    VgDashDirective,
    VgHlsDirective,
} from '@videogular/ngx-videogular/streaming';
import { Subscription, timer } from 'rxjs';

export interface IMediaStream {
    type: 'vod' | 'dash' | 'hls';
    source: string;
    label: string;
    token?: string;
    licenseServers?: IDRMLicenseServer;
}

@Component({
    selector: 'app-streaming-player',
    templateUrl: './streaming-player.component.html',
    styleUrls: ['./streaming-player.component.css'],
})
export class StreamingPlayerComponent implements OnInit {
    @ViewChild(VgDashDirective, { static: true }) vgDash: VgDashDirective;
    @ViewChild(VgHlsDirective, { static: true }) vgHls: VgHlsDirective;

    currentStream: IMediaStream;
    api: VgApiService;

    bitrates: BitrateOptions[];

    streams: IMediaStream[] = [
        {
            type: 'vod',
            label: 'VOD',
            source: 'http://static.videogular.com/assets/videos/videogular.mp4',
        },
        {
            type: 'dash',
            label: 'DASH: Multi rate Streaming',
            source: 'http://dash.edgesuite.net/akamai/bbb_30fps/bbb_30fps.mpd',
        },
        {
            type: 'dash',
            label: 'DASH: Live Streaming',
            source:
                'https://24x7dash-i.akamaihd.net/dash/live/900080/dash-demo/dash.mpd',
        },
        {
            type: 'dash',
            label: 'DASH: DRM with Widevine',
            source:
                'https://storage.googleapis.com/shaka-demo-assets/angel-one-widevine/dash.mpd',
            licenseServers: {
                'com.widevine.alpha': {
                    serverURL: 'https://widevine-proxy.appspot.com/proxy',
                },
            },
        },
        {
            type: 'hls',
            label: 'HLS: Streaming',
            source:
                'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
        },
    ];

    onPlayerReady(api: VgApiService) {
        this.api = api;
    }

    ngOnInit() {
        this.currentStream = this.streams[0];
    }

    setBitrate(option: BitrateOptions) {
        switch (this.currentStream.type) {
            case 'dash':
                this.vgDash.setBitrate(option);
                break;

            case 'hls':
                this.vgHls.setBitrate(option);
                break;
        }
    }

    onClickStream(stream: IMediaStream) {
        this.api.pause();
        this.bitrates = null;

        const source = timer(1000, 2000);

        const timerSubscription: Subscription = source.subscribe(() => {
            this.currentStream = stream;

            timerSubscription.unsubscribe();
        });
    }
}
