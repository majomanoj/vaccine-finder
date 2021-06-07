import { Component, OnInit } from "@angular/core";
import { DataService } from "src/services/data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent implements OnInit {
  districtId = 307;
  districtList = this.data.districtList;
  constructor(private data: DataService) {}
  ngOnInit(): void {}
}
