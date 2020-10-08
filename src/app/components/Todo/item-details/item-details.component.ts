import { Component, OnInit } from "@angular/core";
import { ItemManagerService } from "../../../services/item-manager.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-item-details",
  templateUrl: "./item-details.component.html",
  styleUrls: ["./item-details.component.css"]
})
export class ItemDetailsComponent implements OnInit {
  item = {
    content: "",
    title: "Error!",
    id: 0
  };
  constructor(
    private itemManager: ItemManagerService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.getOneById(params["id"]);
    });
  }
  getOneById(id) {
    this.item = this.itemManager.getOneById(id) || {
      content: "click next to restart from 0",
      title: "Final",
      id: -1
    };
  }
}
