import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileComponent } from './components/file/file.component';



@NgModule({
    declarations: [FileComponent],
    exports: [
        FileComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HelperModule { }
