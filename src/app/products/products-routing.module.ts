import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {ListComponent} from "./list/list.component";
import {EditionComponent} from "./edition/edition.component";
import {EditionLoginComponent} from "../login/edition-login/edition-login.component";

const routes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'edition',
        component: EditionComponent
      },
      {
        path: 'edition/:id',
        component: EditionComponent
      },
      {
        path: 'users/login',
        component: EditionLoginComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
