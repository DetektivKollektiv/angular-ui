import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/user';
import { UserService } from 'src/app/core/services/user/user.service';


@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent implements OnInit {
  @Input() public level: number;

  public profileColor: string = "purple";
  public profileColorCode: String;
  public profileCircle: HTMLElement;
  public profileBadge: HTMLElement;
  public user: User;

  constructor(
    private userService: UserService,

  ) {}

  ngOnInit(): void {
    this.profileCircle = <HTMLElement> document.getElementsByClassName('profileCircle')[0];
    this.profileBadge = <HTMLElement> document.getElementsByClassName('profile-icon-background')[0];

    if (localStorage.getItem('profileColor') == null){
      this.profileColor = "purple";
    }
    else{
      this.profileColor = localStorage.getItem('profileColor');
    }
    this.profileColorChanged()

    this.userService.user$.subscribe(value => {
      if (value) {
        this.user = value;
      }
    });


  }

  profileColorChanged(){
    localStorage.setItem('profileColor', this.profileColor);

    switch(this.profileColor){
      case "yellow":{
        this.profileCircle.style.background = "#FAC800";
        this.profileBadge.style.color = "#5F38FA";
        break;
      }
      case "purple":{
        this.profileCircle.style.background = "#5F38FA";
        this.profileBadge.style.color = "#FF7268";
        break;
      }
      case "coral":{
        this.profileCircle.style.background = "#FF7268";
        this.profileBadge.style.color = "#FAC800";
        break;
      }
    }
  }

}
