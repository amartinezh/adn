import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ADN';
  public menu: MenuItem[] = [
    { url: '/agente', nombre: 'Agente' },
    { url: '/categoria', nombre: 'Categoria' },
    { url: '/comparendo', nombre: 'Comparendos' }
  ];

}
