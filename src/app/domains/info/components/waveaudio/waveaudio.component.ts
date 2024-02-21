import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  signal,
} from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-waveaudio',
  standalone: true,
  imports: [],
  templateUrl: './waveaudio.component.html',
  styleUrl: './waveaudio.component.css',
})
export class WaveaudioComponent implements AfterViewInit {
  @Input({ required: true }) audioUrl!: string;
  @ViewChild('wave') container!: ElementRef;
  private ws!: WaveSurfer;
  isPlaying = signal(false);

  ngAfterViewInit() {
    console.log(this.container);

    this.ws = WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement,
    });

    this.ws.on('play', () => this.isPlaying.set(true));
    this.ws.on('pause', () => this.isPlaying.set(false));
  }

  playPause() {
    this.ws.playPause();
  }
}
