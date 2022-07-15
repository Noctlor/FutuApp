import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FutuinputComponent } from '../Futudata/components/futuinput/futuinput.component';
import { FutudataModule } from '../Futudata/futudata.module';
import { BodyComponent } from './body/body.component';



@NgModule({
  declarations: [
    SidebarComponent,
    BodyComponent,
  ],
  imports: [
    CommonModule,
    FutudataModule
  ],
  exports:[
    SidebarComponent
  ]
})
export class SharedModule { }
