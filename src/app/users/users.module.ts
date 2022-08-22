import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListComponent,
    UserComponent
  ],
})
export class UsersModule { }
