import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: "",
    component: LoginComponent
  }
];
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class LoginModule { }
