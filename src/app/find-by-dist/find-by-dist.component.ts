import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { map } from "rxjs/operators";
import { FindByDistrict, Session } from "src/models/find-by-dist";
import { VaccineService } from "src/services/vaccine.service";

@Component({
  selector: "app-find-by-dist",
  templateUrl: "./find-by-dist.component.html",
  styleUrls: ["./find-by-dist.component.scss"],
})
export class FindByDistComponent implements OnInit {
  date: string ="";
  rsp: Session[] = [];
  @Input("districtId") districtId: number;
  config = {
    dose1: true,
    timeInterval: 60000,
    minCount: 0,
    showPinCode2: false,
  };
  constructor(private api: VaccineService) {}

  ngOnInit(): void {}
  getRsp() {
    this.api
      .getVaccineFindByDistrict(this.districtId, this.getDate())
      .pipe(
        map((rsp) => {
          return rsp.sessions.filter(
            (item) =>
              item.available_capacity_dose1 > 0 && item.min_age_limit === 18
          );
          return rsp.sessions;
        })
      )
      .subscribe((res) => {
        this.rsp = res;
      });
  }

  getDate(): string {
    if (this.date) {
      return this.date;
    } else {
      const cDate = new Date();
      const date =
        cDate.getDate().toString().length == 1
          ? 0 + cDate.getDate().toString()
          : cDate.getDate().toString();
      const month =
        (cDate.getMonth() + 1).toString().length == 1
          ? 0 + (cDate.getMonth() + 1).toString()
          : (cDate.getMonth() + 1).toString();
      this.date = "".concat(
        date,
        "-",
        month,
        "-",
        cDate.getFullYear().toString()
      );
      return this.date;
    }
  }
}
