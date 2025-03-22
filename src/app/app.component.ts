import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portal';

  toggleDarkMode() {
    document.getElementById('portal-app-html')?.classList.toggle('app-dark');
  }
}
