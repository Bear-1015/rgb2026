import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-mascots',
  imports: [RouterModule],
  templateUrl: './mascots.component.html',
  styleUrls: ['./mascots.component.css']
})
export class MascotsComponent {
  protected readonly lightboxOpen = signal(false);
  protected readonly lightboxSrc = signal('');

  protected openLightbox(imageSrc: string): void {
    this.lightboxSrc.set(imageSrc);
    this.lightboxOpen.set(true);
  }

  protected closeLightbox(): void {
    this.lightboxOpen.set(false);
  }
}
