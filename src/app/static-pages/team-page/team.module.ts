import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { TeamPageComponent  } from './team-page/team-page.component';
import { TeamMemberComponent  } from './team-member/team-member.component';
import { MemberFilterComponent } from './member-filter/member-filter.component';

@NgModule({
    declarations: [
        TeamPageComponent,
        TeamMemberComponent,
        MemberFilterComponent
    ],
    exports: [
        TeamPageComponent,

    ],
    imports: [
      CommonModule,
      MaterialModule
    ]
  })
  export class TeamModule{

  }