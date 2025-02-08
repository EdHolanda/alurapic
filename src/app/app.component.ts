import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner/loading-spinner.component";
import { LoadingService } from './services/loading.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, LoadingSpinnerComponent],
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/products">Produtos</a>
      <a routerLink="/cart">Carrinho</a>
      <a routerLink="/login" *ngIf="!authService.isLoggedIn()">Login</a>
      <a (click)="logout()" *ngIf="authService.isLoggedIn()">Logout</a>
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
      cursor: pointer;
    }`
  ]
})
export class AppComponent {
  loading$;
  constructor(private loadingService: LoadingService, public authService: AuthService) {
    this.loading$ = this.loadingService.loading$;
  }

  logout() {
    this.authService.logout();
  }
}
