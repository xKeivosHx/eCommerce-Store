import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent
  implements OnChanges, OnInit, AfterViewInit, OnDestroy
{
  @Input({ required: true }) duration: number = 0;
  @Input({ required: true }) message: string = '';
  counter = signal(0);
  counterRef: number | undefined;
  // constructor
  // ngOnChanges
  // ngOnInit
  // ngDoCheck
  // ngAfterContentInit
  // ngAfterContentChecked
  // ngAfterViewInit
  // ngAfterViewCheck
  // ngOnDestroy

  constructor() {
    //No ASYNC
    //Before Render
    console.log('Constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    //Before and during rendering.
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);

    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {
    //After Render
    //Single Time
    //Async, Then, Subscribe
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('Duration: ', this.duration);
    console.log('Message: ', this.message);
    this.counterRef = window.setInterval(() => {
      console.log('Run Interval');

      this.counter.update((statePrev) => statePrev + 1);
    }, 1000);
  }

  ngAfterViewInit() {
    //After Render
    //Childs Rendered
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef);
  }

  doSomething() {
    console.log('Duration change');
  }
}
