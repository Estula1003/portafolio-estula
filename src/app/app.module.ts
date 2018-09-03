import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './Vista/cabecera/cabecera.component';
import { PiePaginaComponent } from './Vista/pie-pagina/pie-pagina.component';
import { FormularioComponent } from './cuerpo/formulario/formulario.component';
import { PortafolioComponent } from './cuerpo/portafolio/portafolio.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PiePaginaComponent,
    FormularioComponent,
    PortafolioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
