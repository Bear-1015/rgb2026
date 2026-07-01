import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  protected openLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
