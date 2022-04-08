import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { ComparendoService } from '../../shared/service/comparendo.service';
import { Comparendo } from '@shared/models/Comparendo/comparendo';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comparendo-list',
  templateUrl: './comparendo-list.component.html',
  styleUrls: ['./comparendo-list.component.css']
})

export class ComparendoListComponent implements OnInit {
  comparendos!: Comparendo[];
  INICIO_LABOR = 8;
  FIN_LABOR = 23;

  notificacion = Swal.mixin({
    toast: true,
    position: 'center'
  });

  constructor(private comparendoService: ComparendoService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.consultar();
  }

  public consultar() {
    this.comparendoService.consultar()
      .pipe(first())
      .subscribe((res) => {
        this.comparendos = res;
      });
  }

  public eliminar(id: string) {
    const res = this.comparendos.find(x => x.id === id);
    if (!res) { return; }
    res.isDeleting = true;
    this.comparendoService.eliminar(id)
      .pipe(first())
      .subscribe(() => this.comparendos = this.comparendos.filter(x => x.id !== id));
  }

  public validarHora() {
    const now = new Date();
    if (now.getHours() > this.INICIO_LABOR && now.getHours() < this.FIN_LABOR) {
      return true;
    }
    else {
      return false;
    }
  }

  public validarFecha(fechaComparendo) {
    const fecha = new Date(fechaComparendo).getTime();
    const now = new Date().getTime();
    const diff = now - fecha;
    const diffH = diff / (1000 * 60 * 60 * 24);

    if (diffH > 24) {
      return false;
    }
    else {
      return true;
    }
  }

  public mostrarError(mensaje) {
    this.notificacion.fire({
      title: 'Error',
      text: mensaje,
      icon: 'error'
    });
  }

  public async editar(id: string) {
    const res = this.comparendos.find(x => x.id === id);
    if (!res) { return; }
    if (this.validarHora()) {
      if (this.validarFecha(res.fecha)) {
        this.router.navigate(['edit/' + id], { relativeTo: this.route });
      }
      else {
        this.mostrarError('No es posible editar un comparendo antes de pasadas las 24 horas');
      }
    }
    else {
      this.mostrarError('No es posible editar un comparendo en un horario no permitido');
    }
  }
}
