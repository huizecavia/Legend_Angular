import { Component, signal } from '@angular/core';
import { Hike } from "./hike/hike";

@Component({
  selector: 'app-root',
  imports: [Hike],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Legend_Angular');

}
