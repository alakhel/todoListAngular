import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewItemComponent } from "./components/Todo/new-item/new-item.component";
import { HomeComponent } from "./components/Home/home.component";
import { ItemsListComponent } from "./components/Todo/items-list/items-list.component";
import { ItemDetailsComponent } from "./components/Todo/item-details/item-details.component";
import { RegisterComponent } from "./components/auth/register/register.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { AuthGuard } from "./services/auth-guard.service";

const routes: Routes = [
  { path: "registre", component: RegisterComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  {
    path: "new",
    canActivate: [AuthGuard],
    component: NewItemComponent,
    pathMatch: "full"
  },
  {
    path: "items",
    canActivate: [AuthGuard],
    component: ItemsListComponent,
    pathMatch: "full"
  },
  {
    path: "item/:id",
    canActivate: [AuthGuard],
    component: ItemDetailsComponent,
    pathMatch: "full"
  },
  {
    path: "",
    canActivate: [AuthGuard],
    component: HomeComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
