import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "src/app/products/service/products.service";

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  standalone: true,
  styleUrls: ['./edition.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  isEditMode: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService:ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.initForm();

    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.loadProductData(id);
      }
    });
  }

  initForm(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      supplier: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]]
    });
  }

  loadProductData(id: number): void {
    this.productService.getProductById(id).subscribe(product => {
      this.productForm.patchValue(product);
    });
  }

  saveProduct(): void {
    if (this.productForm.invalid) {
      return;
    }

    if (this.isEditMode) {
      this.productService.updateProduct(this.productForm.value).subscribe(() => {
        this.router.navigate(['/products']);
      });
    } else {
      this.productService.createProduct(this.productForm.value).subscribe(() => {
        this.router.navigate(['/products']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
