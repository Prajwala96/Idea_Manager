import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  @Output() loginSuccess = new EventEmitter<{ username: string; displayName: string }>();

  username = '';
  password = '';
  showPassword = false;
  loading = false;
  error = '';

  handleSubmit() {
    this.error = '';

    if (!this.username.trim() || !this.password) {
      this.error = 'Please enter both username and password.';
      return;
    }

    // ✅ Hardcoded credentials check
    if (this.username !== 'admin' || this.password !== 'admin123') {
      this.error = 'Invalid username or password.';
      return;
    }

    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.loginSuccess.emit({
        username: this.username,
        displayName: this.username,
      });
    }, 500);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
