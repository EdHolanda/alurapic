import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <form (ngSubmit)="onSubmit()">
      <input type="text" [(ngModel)]="username" name="username" placeholder="Usuário" required>
      <input type="password" [(ngModel)]="password" name="password" placeholder="Senha" required>
      <button type="submit">Entrar</button>
    </form>
  `
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/']);
    } else {
      alert('Credenciais inválidas!');
    }
  }
}

