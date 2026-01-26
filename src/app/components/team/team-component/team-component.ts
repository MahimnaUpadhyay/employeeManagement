import { Component, inject, OnInit } from '@angular/core';
import { TeamService } from '../../../service/team/team-service';
import { teamsClass } from '../../../models/teams/teamsClass';
import { TeamList } from "../team-list/team-list";

@Component({
  selector: 'app-team-component',
  imports: [TeamList],
  templateUrl: './team-component.html',
  styleUrl: './team-component.css',
})
export class TeamComponent implements OnInit {

  teams: teamsClass[] = [];

  private teamService = inject(TeamService);

  ngOnInit(): void {
    this.teamService.getTeam().subscribe({
      next: (data) => this.teams = data,
      error: (err) => console.log("error in teams: ", err)
    })
  }

}
