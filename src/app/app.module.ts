import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataListComponent } from './data-list/data-list.component';
import { FizzBuzzComponent } from './data-list/fizz-buzz/fizz-buzz.component';

@NgModule({
  declarations: [
    AppComponent,
    DataListComponent,
    FizzBuzzComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
