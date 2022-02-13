import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HackernewDetailComponent } from './hackernew-detail/hackernew-detail.component';
import { HackernewAddComponent } from './hackernew-add/hackernew-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HackernewDetailComponent,
    HackernewAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
