import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { CategoriaSharedService } from '@shared/services/Categoria/categoria.service';
import { Categoria } from '../../shared/model/categoria';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {
  categorias!: Categoria[];

  notificacion = Swal.mixin({
    toast: true,
    position: 'center'
  });

  constructor(private categoriaService: CategoriaSharedService) {}

  ngOnInit() {
      this.consultar();
  }

  public consultar(){
    this.categoriaService.consultar()
          .pipe(first())
          .subscribe((res) => {
            this.categorias = res;
          });
  }

  public success(){
    this.notificacion.fire({
      title: 'Éxito',
      text: 'Se ha eliminado el agente de manera correcta',
      icon: 'success'
    });
  }

  eliminar(id: string) {
      const cat = this.categorias.find(x => x.id === id);
      if (!cat) {
        return;
      }
      cat.isDeleting = true;
      this.categoriaService.eliminar(id)
          .pipe(first())
          .subscribe(() => {
            this.success();
            this.categorias = this.categorias.filter(x => x.id !== id);
          });
  }
}
