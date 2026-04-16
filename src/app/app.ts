import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from "./Pages/register-component/register-component";
import { LoginComponent } from "./Pages/login-component/login-component";
import { Home } from "./Pages/home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegisterComponent, LoginComponent, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Graudation');
}
