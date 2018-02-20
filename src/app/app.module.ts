import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsModule } from '@progress/kendo-angular-inputs';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    GridModule,
    FormsModule,
    BrowserAnimationsModule,
    InputsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
