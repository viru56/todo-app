import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { LazyLoadModule } from "./modules";
import { HttpClientModule } from "@angular/common/http";
import { ApiService, AuthService, TaskService, AuthGuard } from "./shared";
import { CookieService } from "ngx-cookie-service";
import { ToastrModule } from "ngx-toastr";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    LazyLoadModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [ApiService, AuthService, TaskService, CookieService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
