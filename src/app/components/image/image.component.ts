import { Image } from 'src/app/models/image.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  isLoading: boolean = true;

  @Input()
  image!: Image;

  constructor() { }

  onImageLoad(): void {
    this.isLoading = false;
  }
}
