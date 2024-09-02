import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from "./list/list.component";
import {EditionComponent} from "./edition/edition.component";

const routes: Routes = [
  {
    path: 'users',
    children:[
      {
        path:'',
        component:ListComponent
      },
      {
        path:'edition',
        component:EditionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
