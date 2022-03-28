import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-base';
  public companies: MenuItem[] = [
    { url: '/home', nombre: 'Home' },
    { url: '/producto', nombre: 'Producto' },
    { url: '/agente', nombre: 'Agente' },
    { url: '/categoria', nombre: 'Categoria' },
    { url: '/comparendo', nombre: 'Comparendos' }
  ];

  constructor(translate: TranslateService) {
    translate.stream('navbar.internacionalizacion').subscribe((res: string) => { this.companies[5].nombre = res; });
  }
}
