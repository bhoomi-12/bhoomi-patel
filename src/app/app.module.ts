import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavvComponent } from './navv/navv.component';
import { FooterComponent } from './footer/footer.component';
import { ClumsyComponent } from './clumsy/clumsy.component';
import { ErrorComponent } from './error/error.component';
import { BhoomiComponent } from './bhoomi/bhoomi.component';

@NgModule({
  declarations: [
    AppComponent,
    NavvComponent,
    BhoomiComponent,
    FooterComponent,
    ClumsyComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
