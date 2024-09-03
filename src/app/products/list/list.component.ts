import {Component, OnInit} from '@angular/core';
import {catchError, map, Observable, of} from "rxjs";
import {Products} from "../model/Product";
import {ProductsService} from "../service/products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products$: Observable<Products[]>;

  displayedColumns = ['Actions', 'Produto', 'Fornecedor', 'Valor'];

  constructor(
    private productService: ProductsService, private router: Router) {
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

  editProduct(id: number): void {
    this.router.navigate(['/products/edition', id]);
  }

  ngOnInit(): void {
  }

  navigateToProductForm() {
    this.router.navigate(['/products/edition']);
  }
}
