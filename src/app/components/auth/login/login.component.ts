import { Component, OnInit } from "@angular/core";
import { User } from "../../../Model/user";
import { AuthService } from "../../../services/auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      username: ["", [Validators.required, Validators.minLength(6)]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  submitForm() {
    const formValue = this.userForm.value;
    const user = new User(formValue.username, formValue.password);
    this.auth.connect(user);
    this.router.navigate(["/"]);
  }

  loginGoogle() {
    this.auth.loginWithGoogle();
    //     .then(res => console.log(res))
    //     .catch(res => console.log(res));
  }
}
