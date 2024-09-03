import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "src/app/products/service/products.service";

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.scss']
})
export class EditionComponent implements OnInit {

  productForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      supplier: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }


  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      supplier: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]]
    });
  }
}
