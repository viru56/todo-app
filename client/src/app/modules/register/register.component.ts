import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/shared";
import { ToastrService } from "ngx-toastr";
import { Router } from '@angular/router';
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  serverError: string;
  formErrors = {
    email: "",
    password: ""
  };
  validationMessages = {
    email: {
      required: "Please enter your email",
      email: "email is not valid"
    },
    password: {
      required: "please enter your password",
      minlength: "password should be six chars long"
    }
  };
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.registerForm = this.fb.group({
      name: [""],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });

    this.registerForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }
  onValueChanged(data?: any) {
    this.serverError = "";
    if (!this.registerForm) {
      return;
    }
    const form = this.registerForm;
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
        this.formErrors[field] = "";
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
              this.formErrors[field] += messages[key] + " ";
            }
          }
        }
      }
    }
  }
  onSubmit(): void {
    this.serverError = "";
    this.authService
      .addNewUser(this.registerForm.value)
      .then(res => {
        this.toastr.success('Account is created successfully');
        this.router.navigateByUrl('login');
      })
      .catch(err => {
        if (err.error.errmsg && err.error.errmsg.indexOf("email") !== -1) {
          this.serverError = "Email already exists";
        } else {
          this.serverError = "Server error:- failed to create account";
        }
        console.log(err);
      });
  }
}
