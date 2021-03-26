import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/user';


@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent implements OnInit {
  @Input() public user: User;

  public profileColor = 'purple';
  public profileColorCode: string;

  ngOnInit(): void {

    if (localStorage.getItem('profileColor') == null){
      this.profileColor = 'purple';
    }
    else{
      this.profileColor = localStorage.getItem('profileColor');
    }
    this.profileColorChanged();
  }

  profileColorChanged(){
    localStorage.setItem('profileColor', this.profileColor);
  }
}
