import { Component } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {
  loggedInUser:any = {};
  imageSource : string | undefined;
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.loggedInUser = this.authService.getLoggedInUserInfo();
    this.imageSource = environment.ImageUrl + this.loggedInUser.imagePath;
    }
}
