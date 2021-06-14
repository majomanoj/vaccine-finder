import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import { Clipboard } from "@angular/cdk/clipboard";
@Component({
  selector: "app-result-name",
  templateUrl: "./result-name.component.html",
  styleUrls: ["./result-name.component.scss"],
})
export class ResultNameComponent implements OnInit, AfterViewInit {
  @Input("data") data:any;
  @Input("index") i:any;
  @Input("config") config:any;
  constructor(private clipboard: Clipboard) {}
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {}
  copyPinCode(pin: string) {
    this.clipboard.copy(pin);
  }
}
