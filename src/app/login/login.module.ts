import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { EditionLoginComponent } from './edition-login/edition-login.component';
import {FormsModule} from "@angular/forms";
import {ProductsModule} from "../products/products.module";


@NgModule({
  declarations: [
    EditionLoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ProductsModule,
    FormsModule
  ]
})
export class LoginModule { }
