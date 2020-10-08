import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  isAuth: boolean = false;
  stateMessage: string = "Registre";
  authSubscription: Subscription;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.authSubscription = this.auth.authSubject.subscribe(isAuth => {
      console.log("before", this.isAuth, this.stateMessage);
      this.isAuth = isAuth;
      console.log("after", this.isAuth, this.stateMessage);

      this.changeState();
    });
    this.auth.emitAuthSubject();
  }
  changeState() {
    if (this.isAuth) this.stateMessage = "Logout";
    else this.stateMessage = "Registre";
    console.log("changing");
  }
  disconnect() {
    this.auth.disconnect();
  }
}
