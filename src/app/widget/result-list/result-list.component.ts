import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";

@Component({
  selector: "app-result-list",
  templateUrl: "./result-list.component.html",
  styleUrls: ["./result-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultListComponent implements OnInit {
  @Input("config") config:any;
  @Input("data") data:any;
  constructor() {}

  ngOnInit(): void {}
}
