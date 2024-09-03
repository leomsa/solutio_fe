import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditionLoginComponent} from "./edition-login/edition-login.component";
import {ListComponent} from "../products/list/list.component";
import {EditionComponent} from "../products/edition/edition.component";

const routes: Routes = [
  {
    path: 'login',
    children: [
      {
        path: '',
        component: EditionLoginComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoginRoutingModule {
}
