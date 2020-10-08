import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Todo } from "../Model/todo";
import { Subject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class ItemManagerService {
  itemSubject = new Subject<any[]>();
  private itemsList = [];

  constructor(private http: HttpClient) {
    this._getAll();
  }

  emitItemSubject() {
    this.itemSubject.next(this.itemsList);
  }

  /**
   *
   * @operations
   */
  addItem(data) {
    const length = this.itemsList.length;
    data.id = length ? this.itemsList[length - 1].id + 1 : length;
    this.itemsList.push(data);
    console.log(typeof this.itemsList);
    this._save();
    this.emitItemSubject();
  }
  editOne(data) {
    this.itemsList.forEach((v, i) => {
      if (v.id == data.id) this.itemsList[i] = data;
    });
    this._save();
    this.emitItemSubject();
  }
  doneUndone(id) {
    //this.itemsList[id].state = !this.itemsList[id].state;
    this.itemsList.forEach(v => {
      if (v.id == id) v.state = !v.state;
    });
    this._save();
    this.emitItemSubject();
  }

  getOneById(id) {
    return this.itemsList[id];
  }
  deleteOne(id) {
    this.itemsList = this.itemsList.filter(v => v.id != id);
    this._save();
    this.emitItemSubject();
  }
  /**
   * @api_exchange
   */
  private _getAll() {
    this.http
      .get<any>("https://angular-6a149.firebaseio.com/todo.json")
      .subscribe(data => {
        this.itemsList = data || [];
        console.log("service:ngOnInit:", this.itemsList);

        this.emitItemSubject();
      });
  }
  private _save() {
    this.http
      .put("https://angular-6a149.firebaseio.com/todo.json", this.itemsList)
      .subscribe(
        () => {
          console.log("service: save..[OK]", this.itemsList);
        },
        err => {
          console.log(err);
        }
      );
  }
}
