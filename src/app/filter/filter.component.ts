import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit {
  @Input("config") config = {
    dose1: true,
    timeInterval: 60000,
    minCount: 0,
    showPinCode2: false,
  };
  formChangesSubscription: any;
  // @Output() configEmitter = new EventEmitter();
  // @ViewChild("form") ngForm: NgForm;
  constructor() {}

  ngOnInit(): void {
    // this.formChangesSubscription = this.ngForm.form.valueChanges.subscribe(
    //   (x) => {
    //     this.configEmitter.emit(this.config);
    //   }
    // );
  }
}
