import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./components/app/app.component";
import { HomeComponent } from "./components/Home/home.component";
import { NavbarComponent } from "./components/Navbar/navbar.component";
import { ItemsComponent } from "./components/Todo/Items/items.component";
import { NewItemComponent } from "./components/Todo/new-item/new-item.component";
import { ItemsListComponent } from "./components/Todo/items-list/items-list.component";
import { ItemDetailsComponent } from "./components/Todo/item-details/item-details.component";
import { MajPipe } from "./maj.pipe";
import { RegisterComponent } from "./components/auth/register/register.component";
import { LoginComponent } from "./components/auth/login/login.component";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdwpKYX56kIUt3xHQXcWtzucvp4HPbXF4",
  authDomain: "angular-6a149.firebaseapp.com",
  databaseURL: "https://angular-6a149.firebaseio.com",
  projectId: "angular-6a149",
  storageBucket: "angular-6a149.appspot.com",
  messagingSenderId: "536837045095",
  appId: "1:536837045095:web:c85a0ee6c509462066cdc2",
  measurementId: "G-CYPH6NMNHS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ItemsComponent,
    NewItemComponent,
    ItemsListComponent,
    ItemDetailsComponent,
    MajPipe,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
