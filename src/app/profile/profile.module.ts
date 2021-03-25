import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { MaterialModule } from '../shared/material/material.module';
import { RouterModule } from '@angular/router';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';



@NgModule({
    declarations: [ProfileComponent, ProfilePictureComponent],
    exports: [
        ProfileComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule
    ]
})
export class ProfileModule { }
