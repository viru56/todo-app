import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/shared";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("../login/login.module")
        .then(m => m.LoginModule)
        .catch(console.log)
  },
  {
    path: "register",
    loadChildren: () =>
      import("../register/register.module")
        .then(m => m.RegisterModule)
        .catch(console.log)
  },
  {
    path: "task",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("../task/task.module")
        .then(m => m.TaskModule)
        .catch(console.log)
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })]
})
export class LazyLoadModule {}
