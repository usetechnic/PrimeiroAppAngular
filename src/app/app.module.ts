import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovoComponente } from './teste_componente/componente';
import { NovoCorpo } from './teste_componente/corpo';
import { NovoPe } from './teste_componente/pe';
import { TopoComponent } from './problemas/topo/topo';
import { MeioComponent } from './problemas/meio/meio';
import { FinalComponent } from './problemas/final/final';

@NgModule({
  declarations: [
    AppComponent,
    NovoComponente,
    NovoCorpo,
    NovoPe,
    TopoComponent,
    MeioComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]

  
})
export class AppModule { }


