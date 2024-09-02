import {Component} from '@angular/core';
import {ProductsService} from "src/app/products/service/products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'solutio_fe';

  constructor(
    private productService: ProductsService,
    private router: Router,) {
  }

  createProduct() {
    const product = {
      name: 'TABLET',
      supplier: 'lg',
      price: 52
    };

    this.productService.createProduct(product).subscribe({
      next: () => {
        window.location.href = '/product-form';
      },
    });
  }

  navigateToProductForm() {
    this.router.navigate(['/products/edition']);
  }
}
