import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';
import { InternacionalizacionComponent } from './feature/internacionalizacion/internacionalizacion.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'agente', loadChildren: () => import('@agente/agente.module').then(mod => mod.AgenteModule) },
  { path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) },
  { path: 'categoria', loadChildren: () => import('@categoria/categoria.module').then(mod => mod.CategoriaModule) },
  { path: 'internacionalizacion', component: InternacionalizacionComponent, canActivate: [SecurityGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
