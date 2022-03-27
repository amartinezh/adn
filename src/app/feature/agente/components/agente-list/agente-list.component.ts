import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AgenteService } from '../../shared/service/agente.service';
import { Agente } from '../../shared/model/agente';

@Component({
  selector: 'app-agente-list',
  templateUrl: './agente-list.component.html',
  styleUrls: ['./agente-list.component.css']
})
export class AgenteListComponent implements OnInit {
  agentes!: Agente[];

  constructor(private agenteService: AgenteService) {}

  ngOnInit() {
      this.agenteService.consultar()
          .pipe(first())
          .subscribe((res) => {
            this.agentes = res;
          });
  }

  eliminar(id: string) {
      const cat = this.agentes.find(x => x.id === id);
      if (!cat){ return; }
      cat.isDeleting = true;
      this.agenteService.eliminar(id)
          .pipe(first())
          .subscribe(() => this.agentes = this.agentes.filter(x => x.id !== id));
  }
}
