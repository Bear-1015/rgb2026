import { Component, signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent {
  protected readonly activeSection = signal<'timelines' | 'competitors' | 'maps'>('timelines');
  protected readonly activeDayTab = signal<'day1' | 'day2'>('day1');
  protected readonly activeGameTab = signal<'game-mania' | 'game-pjsk' | 'game-arcaea'>('game-mania');

  protected switchMain(section: 'timelines' | 'competitors' | 'maps'): void {
    this.activeSection.set(section);
  }

  protected switchSubTab(tab: 'day1' | 'day2' | 'game-mania' | 'game-pjsk' | 'game-arcaea'): void {
    if (tab === 'day1' || tab === 'day2') {
      this.activeDayTab.set(tab);
      return;
    }

    this.activeGameTab.set(tab);
  }
}
