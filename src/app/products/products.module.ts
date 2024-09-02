import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {EditionComponent} from './edition/edition.component';
import {ListComponent} from './list/list.component';
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    EditionComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    HttpClientModule
  ]
})
export class ProductsModule {
}
