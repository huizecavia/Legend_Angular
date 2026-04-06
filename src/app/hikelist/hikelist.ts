import { Component, DestroyRef, inject, signal, output, OnInit } from '@angular/core';
import { HikeModel } from '../hike/hike.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hikelist',
  imports: [],
  templateUrl: './hikelist.html',
  styleUrl: './hikelist.css',
})

export class Hikelist implements OnInit {
  hikes = signal<HikeModel[]>([]);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef)

  hikeSelected = output<HikeModel>();

  ngOnInit() {
    const subscription = this.httpClient.get<HikeModel[]>('http://localhost:8080/hikes').subscribe({
      next: (resData) => {
        this.hikes.set(resData);
      }
    });

    this.destroyRef.onDestroy(() => {

    })

  }

  onHikeClick(hike: HikeModel) {
    this.hikeSelected.emit(hike);
  }
}
