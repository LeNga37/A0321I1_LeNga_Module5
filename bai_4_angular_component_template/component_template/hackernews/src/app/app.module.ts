import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HackernewsPracticeComponent } from './hackernews-practice/hackernews-practice.component';

@NgModule({
  declarations: [
    AppComponent,
    HackernewsPracticeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
