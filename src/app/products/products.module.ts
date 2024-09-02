import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { EditionComponent } from './edition/edition.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    EditionComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
