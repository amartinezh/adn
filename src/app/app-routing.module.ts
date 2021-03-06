import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/agente', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard] },
  { path: 'agente', loadChildren: () => import('@agente/agente.module').then(mod => mod.AgenteModule), canActivate: [SecurityGuard] },
  {
    path: 'categoria',
    loadChildren: () => import('@categoria/categoria.module').then(mod => mod.CategoriaModule),
    canActivate: [SecurityGuard]
  },
  {
    path: 'comparendo',
    loadChildren: () => import('@comparendo/comparendo.module').then(mod => mod.ComparendoModule),
    canActivate: [SecurityGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
