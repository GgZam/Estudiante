import { Component } from '@angular/core';
import { Calificacion } from '../datasource/calificaciones.interface';
import { lcalificaciones } from '../datasource/datacalificaciones';

@Component({
  selector: 'app-datoscalificaciones',
  templateUrl: './datoscalificaciones.component.html',
  styles: ``
})
export class DatoscalificacionesComponent {

  dataCalificaciones: Calificacion[] = lcalificaciones;

  guardarCalificacion(calificacion: Calificacion) {
    if (calificacion.id == 0) {
      calificacion.id = lcalificaciones.length + 1
    }
    lcalificaciones.push(calificacion);
  }

}
