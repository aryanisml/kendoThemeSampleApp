import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { appRoute } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
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
