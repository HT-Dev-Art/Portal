import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CardModule} from "primeng/card";
import {ButtonModule} from 'primeng/button';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import {Noir} from '../theming/primeng.themes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule
  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Noir,
        options: {
          darkModeSelector: '.app-dark'
        }
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
