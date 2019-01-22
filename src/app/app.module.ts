import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PerfomanceModule } from './perfomance/perfomance.module';

@NgModule({
  declarations: [AppComponent],
  imports: [PerfomanceModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
