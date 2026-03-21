import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Legend_Angular');

  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef)

  ngOnInit() {
    const subscription = this.httpClient.get('http://localhost:8080/hike').subscribe({
      next: (resData) => {
        console.log(resData);
      }
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();

    })
  }
}
