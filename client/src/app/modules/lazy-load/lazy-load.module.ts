import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/shared";

const routes: Routes = [
  {
    path: "login",
    loadChildren : "../login/login.module#LoginModule"
  },
  {
    path: "register",
    loadChildren : "../register/register.module#RegisterModule"
  },
  {
    path: "task",
    canActivate: [AuthGuard],
    loadChildren : "../task/task.module#TaskModule"
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })]
})
export class LazyLoadModule {}
