import { Component, OnInit } from "@angular/core";
import { User } from "../../../Model/user";
import { UserService } from "../../../services/user.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userManager: UserService,
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
    this.userManager.newUser(user);
    this.router.navigate(["/"]);
  }
}
