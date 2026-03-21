import { Component, DestroyRef, inject, signal } from '@angular/core';
import { HikeModel, Place } from './hike.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hike',
  imports: [],
  templateUrl: './hike.html',
  styleUrl: './hike.css',
})
export class Hike {

  hike = signal<HikeModel | undefined>(undefined);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef)

  ngOnInit() {
    const subscription = this.httpClient.get<HikeModel>('http://localhost:8080/hike').subscribe({
      next: (resData) => {
        this.hike.set(resData);
        console.log(resData);
        
      }
    });

    this.destroyRef.onDestroy(() => {

    })

  }

}

