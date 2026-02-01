import { Component } from '@angular/core';
import { ProfileDetail } from "../profile-detail/profile-detail";
import { ProfileForm } from "../profile-form/profile-form";

@Component({
  selector: 'app-profile-component',
  imports: [ProfileDetail, ProfileForm],
  templateUrl: './profile-component.html',
  styleUrl: './profile-component.css',
})
export class ProfileComponent {

}
