import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PerfomanceModule } from './perfomance/perfomance.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PerfomanceModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
