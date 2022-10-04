import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'create',
    loadComponent: () =>
      import('./core/components/add-user/add-user.component').then(
        ({ AddUserComponent }) => AddUserComponent
      ),
  },
  {
    path: 'list',
    loadComponent: () =>
      import('./core/components/users-list/users-list.component').then(
        ({ UsersListComponent }) => UsersListComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
