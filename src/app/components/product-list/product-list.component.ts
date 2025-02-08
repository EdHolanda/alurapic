import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule para habilitar pipes padrão
  template: `
    <div *ngFor="let product of products">
      <img [src]="product.image" alt="{{ product.title }}" style="width: 10%; height: 10%; object-fit: contain;">
      <h3>{{ product.title }}</h3>
      <p>Preço: {{ product.price | currency:'BRL' }}</p>
    </div>
  `
})
export class ProductListComponent {
  products: any[] = [];

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
