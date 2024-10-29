import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IngresoComponent } from './components/general/ingreso/ingreso.component';
import { CambioComponent } from './components/general/cambio/cambio.component';
import { RecuperacionComponent } from './components/general/recuperacion/recuperacion.component';
import { BibliotecaComponent } from './components/organismos/biblioteca/biblioteca.component';
import { ComunicacionComponent } from './components/organismos/comunicacion/comunicacion.component';
import { FormularioComponent } from './components/organismos/formulario/formulario.component';
import { IngresosarcComponent } from './components/organismos/ingresosarc/ingresosarc.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { UsuarioComponent } from './components/general/usuario/usuario.component';
import { RendicionesdecuentaComponent } from './components/sarc/rendicionesdecuenta/rendicionesdecuenta.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IngresoComponent,
    CambioComponent,
    RecuperacionComponent,
    BibliotecaComponent,
    ComunicacionComponent,
    FormularioComponent,
    IngresosarcComponent,
    PagenotfoundComponent,
    UsuarioComponent,
    RendicionesdecuentaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
