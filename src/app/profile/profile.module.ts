import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { MaterialModule } from '../shared/material/material.module';
import { RouterModule } from '@angular/router';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';
import { FormsModule} from '@angular/forms';


@NgModule({
    declarations: [ProfileComponent, ProfilePictureComponent],
    exports: [
        ProfileComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        FormsModule
    ]
})
export class ProfileModule { }
