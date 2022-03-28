import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { ComparendoService } from '../../shared/service/comparendo.service';
import { Comparendo } from '../../shared/model/comparendo';

@Component({
  selector: 'app-comparendo-list',
  templateUrl: './comparendo-list.component.html',
  styleUrls: ['./comparendo-list.component.css']
})
export class ComparendoListComponent implements OnInit {
  comparendos!: Comparendo[];

  constructor(private comparendoService: ComparendoService) {}

  ngOnInit() {
      this.comparendoService.consultar()
          .pipe(first())
          .subscribe((res) => {
            this.comparendos = res;
          });
  }

  eliminar(id: string) {
      const res = this.comparendos.find(x => x.id === id);
      if (!res){ return; }
      res.isDeleting = true;
      this.comparendoService.eliminar(id)
          .pipe(first())
          .subscribe(() => this.comparendos = this.comparendos.filter(x => x.id !== id));
  }
}
