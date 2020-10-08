import { Component, OnInit, OnDestroy } from "@angular/core";
import { ItemManagerService } from "../../../services/item-manager.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-items-list",
  templateUrl: "./items-list.component.html",
  styleUrls: ["./items-list.component.css"]
})
export class ItemsListComponent implements OnInit, OnDestroy {
  itemsList: any[];
  itemSubscribtion: Subscription;

  constructor(private itemManager: ItemManagerService) {}

  ngOnInit(): void {
    this.itemSubscribtion = this.itemManager.itemSubject.subscribe(
      itemsList => {
        this.itemsList = itemsList;
        console.log(
          "itemsListComponnent: Subscription updated : ",
          this.itemsList
        );
      }
    );

    this.itemManager.emitItemSubject(); //on est abonné mtnt, envoie les données
  }
  ngOnDestroy() {
    this.itemSubscribtion.unsubscribe();
  }
}
