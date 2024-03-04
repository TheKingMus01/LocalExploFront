import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FirstcompoComponent} from './firstcompo/firstcompo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FirstcompoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LocalExpo';
}
