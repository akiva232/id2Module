import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { A1Component } from './comps1/a/a1/a1.component';
import { A2Component } from './comps1/a/a2/a2.component';
import { C1Component } from './comps2/b/c1/c1.component';
import { C2Component } from './comps2/b/c2/c2.component';
import { AComponent } from './comps1/a/a.component';
import { BComponent } from './comps2/b/b.component';

@NgModule({
  declarations: [
    AppComponent,
    A1Component,
    A2Component,
    C1Component ,
    C2Component,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
