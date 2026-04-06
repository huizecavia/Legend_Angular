import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HikeModel } from './hike.model';

@Component({
  selector: 'app-hike',
  imports: [CommonModule],
  templateUrl: './hike.html',
  styleUrl: './hike.css',
})
export class Hike {

  hike = input<HikeModel>();

}

