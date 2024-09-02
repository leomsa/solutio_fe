import {Injectable} from '@angular/core';
import {Products} from "../model/Product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
  }
)
export class ProductsService {
  constructor(private httpClient: HttpClient) {
  }

  private readonly API  = 'http://localhost:8080/products/allproducts'

  listAllProducts() {
    return this.httpClient.get<Products[]>(this.API);
  }
}
