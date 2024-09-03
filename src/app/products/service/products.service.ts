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

  private readonly API = 'http://localhost:8080/products/allproducts'
  private readonly API_DELETE = 'http://localhost:8080/products'
  private readonly API_CREATE = 'http://localhost:8080/products/product'
  private readonly API_FIND = 'http://localhost:8080/products'
  private readonly API_UPDATE = 'http://localhost:8080/products'
  listAllProducts() {
    return this.httpClient.get<Products[]>(this.API);
  }

  deleteProduct(id: number): Observable<any> {
    const url = `${this.API_DELETE}/${id}`;
    return this.httpClient.delete(url);
  }

  createProduct(product: { name: string; supplier: string; price: number }): Observable<any> {
    return this.httpClient.post(this.API_CREATE, product);
  }

  getProductById(id: number): Observable<Products> {
    return this.httpClient.get<Products>(`${this.API_FIND}/${id}`);
  }

  updateProduct(id: number, product: Products): Observable<Products> {
    const url = `${this.API_UPDATE}/${id}`;
    return this.httpClient.put<Products>(url, product);
  }
}
