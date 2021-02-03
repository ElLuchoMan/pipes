import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//Modulos personalizados
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

import LocaleEs  from "@angular/common/locales/es-CO";
import LocaleIt from "@angular/common/locales/it";
import {registerLocaleData} from "@angular/common"
registerLocaleData(LocaleEs);//Se registra el idioma español
registerLocaleData(LocaleIt);//Se registra el idioma italiano
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
    
  ],
  providers: [
    {
      provide:LOCALE_ID, useValue:'es-CO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
