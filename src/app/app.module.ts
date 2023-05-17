import { PercentPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { percentagePipe } from './student.pipe';
import { StudentService } from './student.services';
import { FilterPipe } from './filter.pipe';
import { DatechangePipe } from './datechange.pipe';

import { JsonformatPipe } from './jsonformat.pipe';

@NgModule({
  declarations: [
    AppComponent,JsonformatPipe , percentagePipe,
    FilterPipe,
    DatechangePipe,
    JsonformatPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
