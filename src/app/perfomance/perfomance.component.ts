import { AfterViewInit, Component, OnInit } from '@angular/core';
import { averagePerfomance } from './average-perfomance';
import { rnd } from './rnd';

@Component({
  selector: 'app-perfomance',
  templateUrl: './perfomance.component.html',
  styleUrls: ['./perfomance.component.css']
})
export class PerfomanceComponent implements OnInit, AfterViewInit {
  rnd = rnd;
  rndRev = [...this.rnd.reverse()];

  perf;
  ngOnInit() {
    this.perf = performance.now();
  }

  ngAfterViewInit() {
    const res = performance.now();
    console.log('list render time: ', res - this.perf);

    const childSumm = averagePerfomance.reduce((acc, i) => acc + i, 0);
    console.log('child average render time: ', childSumm / averagePerfomance.length);
  }
}
