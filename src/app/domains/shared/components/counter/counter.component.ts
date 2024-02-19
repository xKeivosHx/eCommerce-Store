import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent implements OnChanges {
  @Input({ required: true }) duration: number = 0;
  @Input({ required: true }) message: string = '';

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
  }

  ngOnInit() {}
}
