import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TargetaCreditoComponent } from './components/targeta-credito/targeta-credito.component';

@NgModule({
  declarations: [
    AppComponent,
    TargetaCreditoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
