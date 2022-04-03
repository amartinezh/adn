import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { CategoriaService } from '../../shared/service/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categoria-add',
  templateUrl: './categoria-add.component.html',
  styleUrls: ['./categoria-add.component.css']
})
export class CategoriaAddComponent implements OnInit {
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
      private categoriaService: CategoriaService
  ) {}

  ngOnInit() {
      this.id = this.route.snapshot.params.id;
      this.isAddMode = !this.id;
      const formOptions: AbstractControlOptions = {  };
      this.form = this.formBuilder.group({
          id: ['', Validators.required],
          descripcion: ['', Validators.required],
      }, formOptions);
      if (!this.isAddMode) {
          this.categoriaService.consultarId(this.id)
              .pipe(first())
              .subscribe(x => this.form.patchValue(x));
      }
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
          this.createCategoria();
      } else {
          this.updateCategoria();
      }
  }

  public createCategoria() {
      this.categoriaService.guardar(this.form.value)
          .pipe(first())
          .subscribe(() => {
            this.success();
            this.router.navigate(['../'], { relativeTo: this.route });
          }, error => this.mostrarError(error.error.mensaje))
          .add(() => this.loading = false);
  }

  public updateCategoria() {
      this.categoriaService.guardar(this.form.value, this.id)
          .pipe(first())
          .subscribe(() => {
              this.router.navigate(['../../'], { relativeTo: this.route });
          })
          .add(() => this.loading = false);
  }

  public success(){
    this.notificacion.fire({
      title: 'Éxito',
      text: 'Se ha creado la categoria',
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
