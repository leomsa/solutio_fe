import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {EditionComponent} from './edition/edition.component';
import {ListComponent} from './list/list.component';
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    EditionComponent
  ]
})
export class ProductsModule {
}
