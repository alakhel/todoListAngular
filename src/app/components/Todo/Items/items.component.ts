import { Component, OnInit, Input } from "@angular/core";
import { ItemManagerService } from "../../../services/item-manager.service";
import { Todo } from "../../../Model/todo";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.css"]
})
export class ItemsComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() bgColor: string;
  @Input() state: boolean;
  @Input() id: number;
  isEditMode: boolean = false;

  constructor(private itemManager: ItemManagerService) {}

  ngOnInit(): void {}

  doneUndone(id?) {
    // this.state = !this.state;
    this.itemManager.doneUndone(id);
  }

  editMode(id?) {
    console.log("editMode");
    this.isEditMode = !this.isEditMode;
  }

  saveEditMode(id) {
    this.isEditMode = false;
    console.log(id);
    this.itemManager.editOne(
      new Todo(id, this.title, this.content, this.state, this.bgColor, null)
    );
  }
  deleteOne(id) {
    this.itemManager.deleteOne(id);
  }
}
