import {
  Component,
  OnInit,
  AfterViewChecked,
  AfterViewInit
} from '@angular/core';
import { rnd } from './rnd';
import { childPerf } from './child/child-perf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ivy-perfomance';
  rnd = rnd;
  perf;
  ngOnInit() {
    this.perf = performance.now();
  }

  ngAfterViewInit() {
    const res = performance.now();

    console.log(res - this.perf);

    const childSumm = childPerf.reduce((acc, i) => acc + i, 0);

    console.log('child render', childSumm / childPerf.length);
  }
}
