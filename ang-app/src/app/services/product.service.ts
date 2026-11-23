import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductPayload } from '../models/product';

@Injectable({ providedIn: 'root' })
export class ProductService {

  constructor(private http: HttpClient) {}

  getAllProducts(){
    return this.http.get("http://localhost:8083/products")
  }

  deleteProduct(product: any) {
    return this.http.delete("http://localhost:8083/products/"+product.id);
  }

}

