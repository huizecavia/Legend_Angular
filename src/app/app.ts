import { Component, signal } from '@angular/core';
import { Hike } from "./hike/hike";
import { Hikelist } from "./hikelist/hikelist";

@Component({
  selector: 'app-root',
  imports: [Hike, Hikelist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Legend_Angular');

}
