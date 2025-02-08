import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner/loading-spinner.component";
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, LoadingSpinnerComponent],
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/products">Produtos</a>
      <a routerLink="/cart">Carrinho</a>
      <a routerLink="/login">Login</a>
    </nav>
    <app-loading-spinner *ngIf="loading$ | async"></app-loading-spinner>
    <router-outlet></router-outlet>
  `,
  styles: [
    `nav {
      display: flex;
      gap: 15px;
      padding: 10px;
      background: #f8f9fa;
    }
    a {
      text-decoration: none;
      color: #007bff;
      font-weight: bold;
    }`
  ]
})
export class AppComponent {
  loading$;
  constructor(private loadingService: LoadingService) {
  this.loading$ = this.loadingService.loading$;
  }
}
