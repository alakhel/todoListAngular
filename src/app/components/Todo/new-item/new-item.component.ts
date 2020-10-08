import { Component, OnInit } from "@angular/core";
import { ItemManagerService } from "../../../services/item-manager.service";
import { Todo } from "../../../Model/todo";
@Component({
  selector: "app-new-item",
  templateUrl: "./new-item.component.html",
  styleUrls: ["./new-item.component.css"]
})
export class NewItemComponent implements OnInit {
  itemContent: string;
  itemTitle: string;
  itemColor: string = "#000";
  itemState: boolean;
  fullMode: boolean = false;
  //to do : new Todo();
  constructor(private itemManager: ItemManagerService) {}

  ngOnInit(): void {}
  addItem(): void {
    this.itemManager.addItem(
      new Todo(
        0,
        this.itemTitle,
        this.itemContent,
        this.itemState || false,
        this.itemColor
      )
    );
    this.itemContent = "";
    this.itemTitle = "";
  }
  switchFullMode() {
    this.fullMode = true;
  }
}
