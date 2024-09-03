import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Calificacion } from '../datasource/calificaciones.interface';

@Component({
  selector: 'app-modalcalificaciones',
  templateUrl: './modalcalificaciones.component.html',
  styles: ``
})
export class ModalcalificacionesComponent {

  @Input()
  modalid: string = 'modalejemplo';

  @Input()
  dataCalificaciones: Calificacion = {
    id: 0,
    nombres_tarea: '',
    descripcion_tarea: '',
    fecha_inicio: '',
    fecha_fin: '',
    calificacion: 0
  };

  @Output()
  eventoGuardar = new EventEmitter<Calificacion>();

  guardar() {
    this.eventoGuardar.emit(this.dataCalificaciones);
    this.cerrarModal();
  }

  cerrarModal() {
    let btnCerrar = document.getElementById('btnCerrarModal');
    if (btnCerrar) {
      btnCerrar?.click();
    }
  }
}
