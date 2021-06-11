import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import { Clipboard } from "@angular/cdk/clipboard";
@Component({
  selector: "app-result-name",
  templateUrl: "./result-name.component.html",
  styleUrls: ["./result-name.component.sass"],
})
export class ResultNameComponent implements OnInit, AfterViewInit {
  @Input("data") data;
  @Input("index") i;
  @Input("config") config;
  constructor(private clipboard: Clipboard) {}
  ngAfterViewInit(): void {
    debugger;
    console.log(this.data);
  }

  ngOnInit(): void {}
  copyPinCode(pin: string) {
    this.clipboard.copy(pin);
  }
}
