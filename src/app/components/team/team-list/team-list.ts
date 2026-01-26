import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { teamsClass } from '../../../models/teams/teamsClass';

@Component({
  selector: 'app-team-list',
  imports: [CommonModule],
  templateUrl: './team-list.html',
  styleUrl: './team-list.css',
})
export class TeamList {
  @Input() teamList: teamsClass[] = [];
}
