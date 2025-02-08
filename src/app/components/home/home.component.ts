import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <h1>Bem-vindo à nossa loja!</h1>
      <p>Confira os melhores produtos disponíveis.</p>
      <a routerLink="/products">Ver Produtos</a>
    </section>
  `,
  styles: [
    `section {
      text-align: center;
      padding: 20px;
    }
    a {
      display: inline-block;
      margin-top: 10px;
      padding: 10px 20px;
      background: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 5px;
    }`
  ]
})
export class HomeComponent {}