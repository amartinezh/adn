import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { AgenteService } from '../../shared/service/agente.service';

@Component({
  selector: 'app-agente-add',
  templateUrl: './agente-add.component.html',
  styleUrls: ['./agente-add.component.css']
})
export class AgenteAddComponent implements OnInit {
  form!: FormGroup;
  id!: string;
  isAddMode!: boolean;
  loading = false;
  submitted = false;

  notificacion = Swal.mixin({
    toast: true,
    position: 'center'
  });

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private agenteService: AgenteService
  ) {}

  ngOnInit() {
      this.id = this.route.snapshot.params.id;
      this.isAddMode = !this.id;
      const formOptions: AbstractControlOptions = {  };
      this.form = this.formBuilder.group({
          id: ['', Validators.required],
          nombre: ['', Validators.required],
          telefono: ['', Validators.required],
          horaInicioLabor: ['', Validators.required],
          horaFinLabor: ['', Validators.required]
      }, formOptions);
      if (!this.isAddMode) {
         this.consultarId(this.id);
      }
  }

  public consultarId(id){
    this.agenteService.consultarId(id)
    .pipe(first())
    .subscribe(x => this.form.patchValue(x));
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      this.loading = true;
      if (this.isAddMode) {
          this.createAgente();
      } else {
          this.updateAgente();
      }
  }

  public createAgente() {
      this.agenteService.guardar(this.form.value)
          .pipe(first())
          .subscribe(() => {
              this.success();
              this.router.navigate(['../'], { relativeTo: this.route });
          }, error => this.mostrarError(error.error.mensaje))
          .add(() => this.loading = false);
  }

  public updateAgente() {
      this.agenteService.editar(this.form.value, this.id)
          .pipe(first())
          .subscribe(() => {
              this.router.navigate(['../../'], { relativeTo: this.route });
          })
          .add(() => this.loading = false);
  }

  public success(){
    this.notificacion.fire({
      title: 'Éxito',
      text: 'Se ha creado el agente',
      icon: 'success'
    });
  }

  public mostrarError(mensaje){
    this.notificacion.fire({
      title: 'Error',
      text: mensaje,
      icon: 'error'
    });
  }
}
