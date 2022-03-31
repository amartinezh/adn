import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenteListComponent } from '@agente/components/agente-list/agente-list.component';
import { AgenteAddComponent } from '@agente/components/agente-add/agente-add.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: '', component: AgenteListComponent
      },
      {
        path: 'add', component: AgenteAddComponent
      },
      {
        path: 'edit/:id', component: AgenteAddComponent
      },
      {
        path: 'del', component: AgenteListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgenteRoutingModule { }
