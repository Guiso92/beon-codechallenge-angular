import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListViewComponent } from './list-view/list-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: ListViewComponent,
  },
  {
    path: 'detail/:id',
    component: DetailViewComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
