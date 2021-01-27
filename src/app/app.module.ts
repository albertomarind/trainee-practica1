import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { Server1Commponent } from './server1';

@NgModule({
  declarations: [
    AppComponent,
    NuevoComponent,
    Server1Commponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
