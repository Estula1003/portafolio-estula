import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

//Componentes
import { AppComponent } from './app.component';
import { CabeceraComponent } from './Vista/cabecera/cabecera.component';
import { PiePaginaComponent } from './Vista/pie-pagina/pie-pagina.component';
import { PortafolioComponent } from './cuerpo/portafolio/portafolio.component';
import { NosotrosComponent } from './cuerpo/nosotros/nosotros.component';
import { ItemComponent } from './cuerpo/item/item.component';

//Rutas
import { AppRouting } from './routing.module';
import { BuscarComponent } from './cuerpo/buscar/buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PiePaginaComponent,
    PortafolioComponent,
    NosotrosComponent,
    ItemComponent,
    BuscarComponent
  ],
  
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
