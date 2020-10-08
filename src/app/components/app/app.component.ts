import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, interval, Subscription } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {
  title = "todolist";
  count: any;
  countId: Subscription;
  ngOnInit() {
    this.countId = interval(1000).subscribe(number => {
      this.count = number;
    });
  }
  ngOnDestroy() {
    this.countId.unsubscribe();
  }
}
