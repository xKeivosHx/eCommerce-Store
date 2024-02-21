import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../../shared/components/counter/counter.component';
import { WaveaudioComponent } from '../../../info/components/waveaudio/waveaudio.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent, WaveaudioComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  duration = signal(1000);
  message = signal('Hello');

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber);
  }

  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }
}
