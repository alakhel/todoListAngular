import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Router } from "@angular/router";
import * as firebase from "firebase/app";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  isAuth: boolean = false;
  authSubject = new Subject<any>();
  constructor(private route: Router /* , private afAuth: AngularFireAuth */) {}

  emitAuthSubject() {
    this.authSubject.next(this.isAuth);
  }

  connect(data) {
    firebase
      .auth()
      .signInWithEmailAndPassword(data.username, data.password)
      .then(res => {
        this.isAuth = true;

        this.route.navigate(["/"]);
        this.emitAuthSubject();
        console.log(res);
      })
      .catch(res => console.log(res));
    /** */
  }

  disconnect() {
    this.isAuth = false;
    firebase
      .auth()
      .signOut()
      .then(() => console.log("ok"))
      .catch(err => console.log(err));
    this.route.navigate(["/login"]);
    this.emitAuthSubject();
  }

  loginWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(res => {
        console.log(res);
        this.isAuth = true;
        this.emitAuthSubject();
        this.route.navigate(["/"]);
      })
      .catch(res => console.log(res));
  }
}
