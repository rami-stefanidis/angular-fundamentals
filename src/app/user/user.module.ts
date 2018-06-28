import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {userRoutes} from './user.routes';
import {ProfileComponent} from './profile.component';

/*
Difference against app.module
This is a feature module
imports CommonModule
 */
@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations:[
    ProfileComponent
  ],
  providers:[]
})
export class UserModule {}
