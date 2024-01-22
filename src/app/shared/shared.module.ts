import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { EdadPipe } from './edad.pipe';
import { SizeDirective } from './size.directive';

@NgModule({
  declarations: [
    FullNamePipe,
    EdadPipe,
    SizeDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FullNamePipe,
    EdadPipe,
    SizeDirective
  ]
})
export class SharedModule { }
