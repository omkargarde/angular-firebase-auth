import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angular-firebase-auth';
  authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      if (user) {
        this.authService.currentUserSignal.set({
          email: user.email!,
          username: user.displayName!,
        });
      } else {
        this.authService.currentUserSignal.set(null);
      }
      console.log(this.authService.currentUserSignal());
    });
  }
  logout(): void {
    this.authService.logout();
  }
}
