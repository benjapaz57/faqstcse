import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { IntroduccionComponent } from './components/sarc/introduccion/introduccion.component';
import { MarconormativolegalComponent } from './components/sarc/marconormativolegal/marconormativolegal.component';
import { ProcesoplanificacionpresupuestariaComponent } from './components/sarc/procesoplanificacionpresupuestaria/procesoplanificacionpresupuestaria.component';
import { GestionejecucionpresupuestoComponent } from './components/sarc/gestionejecucionpresupuesto/gestionejecucionpresupuesto.component';
import { AbmdatosComponent } from './components/sarc/abmdatos/abmdatos.component';
import { RendicionesdecuentaComponent } from './components/sarc/rendicionesdecuenta/rendicionesdecuenta.component';
import { AdmderecursosComponent } from './components/sarc/admderecursos/admderecursos.component';
import { PresentacionderendicionComponent } from './components/sarc/presentacionderendicion/presentacionderendicion.component';
import { FaqsarcComponent } from './components/sarc/faqsarc/faqsarc.component';
import { TransferenciaComponent } from './components/sarc/rendicionesdecuenta/transferencia/transferencia.component';
import { OrdendepagoComponent } from './components/sarc/rendicionesdecuenta/ordendepago/ordendepago.component';


const routes: Routes = [
  //Inicio Component
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  //General Component
  { path: 'ingreso', component: IngresoComponent},
  { path: 'usuario', component: UsuarioComponent},
  { path: 'cambio', component: CambioComponent},
  { path: 'recuperacion', component: RecuperacionComponent},
  //Organismos Component
  { path: 'biblioteca', component: BibliotecaComponent},
  { path: 'comunicacion', component: ComunicacionComponent},
  { path: 'formulario', component: FormularioComponent},
  { path: 'ingresosarc', component: IngresosarcComponent},
  //SARC components
  { path: 'introsarc', component: IntroduccionComponent},
  { path: 'marconormativolegal', component: MarconormativolegalComponent},
  { path: 'procesoplanificacionpresupuestaria', component: ProcesoplanificacionpresupuestariaComponent},
  { path: 'gestionejecucionpresupuesto', component: GestionejecucionpresupuestoComponent},
  { path: 'abmdatos', component: AbmdatosComponent},
  { path: 'rendicionesdecuenta', component: RendicionesdecuentaComponent},
  { path: 'admrecursos', component: AdmderecursosComponent},
  { path: 'presentacionrendicion', component: PresentacionderendicionComponent},
  { path: 'faqssarc', component: FaqsarcComponent},
  { path: 'transferencia', component: TransferenciaComponent},
  { path: 'ordendepago', component: OrdendepagoComponent},
  //PageNotFound Component
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
