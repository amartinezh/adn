import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { CategoriaService } from '../../shared/service/categoria.service';
import { Categoria } from '../../shared/model/categoria';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {
  categorias!: Categoria[];

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit() {
      this.categoriaService.consultar()
          .pipe(first())
          .subscribe((res) => {
            this.categorias = res;
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
          .subscribe(() => this.categorias = this.categorias.filter(x => x.id !== id));
  }
}
