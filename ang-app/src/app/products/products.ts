import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';


registerLocaleData(localeFr);

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit{
  product : any;
  constructor(private productService : ProductService) {  }

  ngOnInit(): void {
    this.getAllProducts();

  }

  getAllProducts() : void {
    this.productService.getAllProducts().subscribe(
      {
        next : resp => {
          this.product = resp;
        },
        error : err => {
          console.log(err)
        }
      }
    )
  }
  handelDelete(product : any): void {
    let v = confirm('etes vous sure de vouloir supprimer !');
    if (v==true) {
      this.productService.deleteProduct(product).subscribe(
        {
          next : resp => {
            this.getAllProducts();
          },
          error : err => {
            console.log(err)
          }
        }
      );
    }
  }
}
