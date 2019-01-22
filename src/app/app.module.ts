import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PerfomanceModule } from 'src/app/perfomance/perfomance.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PerfomanceModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
