import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersRoutingModule} from './users-routing.module';
import {EditionComponent} from './edition/edition.component';
import {ListComponent} from './list/list.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    EditionComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class UsersModule {
}
