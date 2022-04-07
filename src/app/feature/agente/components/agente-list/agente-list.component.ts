import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AgenteSharedService } from '@shared/services/Agente/agente.shared.service';
import { Agente } from '../../shared/model/agente';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agente-list',
  templateUrl: './agente-list.component.html',
  styleUrls: ['./agente-list.component.css']
})
export class AgenteListComponent implements OnInit {
  agentes!: Agente[];

  notificacion = Swal.mixin({
    toast: true,
    position: 'center'
  });

  constructor(private agenteService: AgenteSharedService) {}

  ngOnInit() {
      this.getInformacion();
  }

  public getInformacion(){
    this.agenteService.consultar()
    .pipe(first())
    .subscribe((res) => {
      this.agentes = res;
    });
  }

  public success(){
    this.notificacion.fire({
      title: 'Éxito',
      text: 'Se ha eliminado el agente de manera correcta',
      icon: 'success'
    });
  }

  public eliminar(id: string) {
      const cat = this.agentes.find(x => x.id === id);
      if (!cat){ return; }
      cat.isDeleting = true;
      this.agenteService.eliminar(id)
          .pipe(first())
          .subscribe(() => {
            this.success();
            this.agentes = this.agentes.filter(x => x.id !== id);
          });
  }
}
