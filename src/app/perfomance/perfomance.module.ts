import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { PerfomanceComponent } from './perfomance.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PerfomanceComponent, ChildComponent],
  exports: [PerfomanceComponent]
})
export class PerfomanceModule {}
