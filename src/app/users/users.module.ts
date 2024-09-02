import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersRoutingModule} from './users-routing.module';
import {EditionComponent} from './edition/edition.component';
import {ListComponent} from './list/list.component';


@NgModule({
  declarations: [
    EditionComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule {
}
