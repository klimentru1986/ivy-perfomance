import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { childPerf } from './child-perf';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterViewInit {
  @Input() text: string;
  perf;
  ngOnInit() {
    this.perf = performance.now();
  }

  ngAfterViewInit() {
    const res = performance.now();

    childPerf.push(res - this.perf);
  }
}
