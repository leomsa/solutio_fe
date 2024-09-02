import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EditionComponent} from "../users/edition/edition.component";
import {ListComponent} from "./list/list.component";

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
