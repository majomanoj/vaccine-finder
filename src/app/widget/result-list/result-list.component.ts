import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";

@Component({
  selector: "app-result-list",
  templateUrl: "./result-list.component.html",
  styleUrls: ["./result-list.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultListComponent implements OnInit {
  @Input("config") config;
  @Input("data") data;
  constructor() {}

  ngOnInit(): void {}
}
