import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './shared/master/master.component';
import { LoginComponent } from 'projects/auth/src/public-api';
import { HomeComponent } from './shared/home/home.component';
import { DevComponent } from 'projects/dev/src/public-api';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    data: { title: 'Main' },
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'add-new-developer',
        component: DevComponent,
        data: { title: 'Add New Developer' }
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
