import { Injectable } from "@angular/core";
import * as firebase from "firebase/app";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor() {}
  newUser(data) {
    console.log("=>", data);
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.username, data.password)
      .catch(err => console.log(err));
  }
}
