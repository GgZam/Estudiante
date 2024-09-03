import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteComponent } from './componente/componente.component';
import { DatosestudiantesComponent } from './componente/subcomponente/datosestudiantes/datosestudiantes.component';
import { DatosrepresentantesComponent } from './componente/subcomponente/datosrepresentantes/datosrepresentantes.component';
import { DatoscalificacionesComponent } from './componente/subcomponente/datoscalificaciones/datoscalificaciones.component';
import { ModalcalificacionesComponent } from './componente/subcomponente/modalcalificaciones/modalcalificaciones.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ComponenteComponent,
    DatosestudiantesComponent,
    DatosrepresentantesComponent,
    DatoscalificacionesComponent,
    ModalcalificacionesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ComponenteComponent
  ]
})
export class EstudianteModule { }
