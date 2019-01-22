import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { averagePerfomance } from '../average-perfomance';

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

    averagePerfomance.push(res - this.perf);
  }
}
