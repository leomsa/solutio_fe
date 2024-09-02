import {Component, OnInit} from '@angular/core';
import {catchError, map, Observable, of} from "rxjs";
import {Products} from "../model/Product";
import {ProductsService} from "../service/products.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products$: Observable<Products[]>;

  displayedColumns = ['Actions', 'Produto', 'Fornecedor', 'Valor'];

  constructor(
    private productService: ProductsService) {
    this.products$ = this.productService.listAllProducts()
      .pipe(
        map(patients => {
          return patients;
        })
      );
  }

  deleteProductByID(id: number): void {
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        window.location.reload();
      },
      error: (err) => {
        console.error('Erro ao deletar produto', err);
      }
    });
  }

  ngOnInit(): void {
  }
}
