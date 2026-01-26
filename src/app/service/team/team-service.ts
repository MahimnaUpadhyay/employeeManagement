import { inject, Injectable } from '@angular/core';
import { teamsClass } from '../../models/teams/teamsClass';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getTeam } from '../../utility/API_ENDPOINTS/teamEndpoints';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  
  private httpClient = inject(HttpClient);

  private getEndpoint = getTeam;

  // GET method
  getTeam(): Observable<teamsClass[]>{
    return this.httpClient.get<teamsClass[]>(this.getEndpoint);
  }

}
