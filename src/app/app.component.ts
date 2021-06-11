import { AfterViewInit, Component, OnInit } from "@angular/core";
import { DataService } from "src/services/data.service";
import * as CryptoJS from "crypto-js";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent implements OnInit, AfterViewInit {
  districtId = 307;
  districtList = this.data.districtList;
  constructor(private data: DataService) {}
  ngAfterViewInit(): void {}
  ngOnInit(): void {}
}
