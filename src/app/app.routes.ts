import { Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee-component/employee-component';
import { TeamComponent } from './components/team/team-component/team-component';
import { ProfileComponent } from './components/profile/profile-component/profile-component';

export const routes: Routes = [
    {
        path: '',
        component: EmployeeComponent
    },
    {
        path: 'teams',
        component: TeamComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    }
];
