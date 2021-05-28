import { Component, OnInit } from "@angular/core";
import { MatSelectChange } from "@angular/material/select";
import { DistrictList } from "src/models/district-info";
import { VaccineByPinList } from "src/models/pincode-search";
import { StateList } from "src/models/state-info";
import { Center, Vaccine } from "src/models/vaccine-info";
import { VaccineService } from "src/services/vaccine.service";
import { filter, map, retry, timeInterval } from "rxjs/operators";
import { interval } from "rxjs";
import { Clipboard } from "@angular/cdk/clipboard";
import { PinCodeModel } from "src/models/general";
import { Session } from "src/models/vaccine-info";
import { DataService } from "src/services/data.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent implements OnInit {
  stateCode = 17;
  config = { dose1: true, timeInterval: 60000 };
  stateList = {} as StateList;
  districtList = this.data.districtList;
  vaccineByPinRsp = {} as VaccineByPinList;
  vaccineyDist: Center[] = [];
  date: string;
  pinCode: PinCodeModel = { is18Only: false } as PinCodeModel;
  pinCode2: PinCodeModel = { is18Only: false } as PinCodeModel;
  districtId = 307;
  interval;
  audio;
  respList: { a: Center[]; b: Center[] } = { a: [], b: [] };
  spinner: boolean = false;
  constructor(
    private api: VaccineService,
    private clipboard: Clipboard,
    private data: DataService
  ) {}
  ngOnInit(): void {
    this.audio = new Audio();
    this.audio.src = "../../../assets/alert.mp3";
    this.audio.load();
    this.getAllStates();
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

  playSound() {
    this.audio.play();
  }
  stopAudio() {
    this.audio.pause();
  }
  searchByDist(distIs: number) {
    this.api
      .getVaccineListByDistrict(distIs, this.getDate())
      .pipe(
        map((res) => {
          let clonedRes = this.getCloneOfCenters(res.centers);
          let center1: Center[] = [];
          let center2: Center[] = [];
          clonedRes.forEach((c) => {
            let c1: Center = {};
            let c2: Center = {};
            c.sessions = c.sessions.filter((s) =>
              this.config.dose1
                ? s.available_capacity_dose1 > 0
                : s.available_capacity_dose2 > 0
            );
            if (c.sessions.length) {
              c1 = this.getCloneCenter(c);
              c2 = this.getCloneCenter(c);

              if (this.pinCode.is18Only) {
                c1.sessions = c1.sessions.filter((f) => f.min_age_limit === 18);
              }
              if (this.pinCode2.is18Only) {
                c2.sessions = c2.sessions.filter((f) => f.min_age_limit === 18);
              }
              center1.push(c1);
              center2.push(c2);
            }
          });

          debugger;
          if (!this.pinCode.pinCode && !this.pinCode2.pinCode)
            return {
              a: clonedRes.filter((res) => res.sessions.length > 0),
              b: [],
            };
          const listPinCodes1 = this.pinCode.pinCode
            ?.replace(" ", "")
            ?.split(",");
          const listPinCodes2 = this.pinCode2.pinCode
            ?.replace(" ", "")
            ?.split(",");
          return {
            a: listPinCodes1
              ? center1.filter(
                  (res) =>
                    res.sessions.length > 0 &&
                    listPinCodes1.indexOf(res.pincode.toString()) >= 0
                )
              : [],
            b: listPinCodes2
              ? center2.filter(
                  (res) =>
                    res.sessions.length > 0 &&
                    listPinCodes2.indexOf(res.pincode.toString()) >= 0
                )
              : [],
          };
        })
      )
      .subscribe((res) => {
        this.respList = res;
        if (res.a.length || res.b.length) {
          this.spinner = false;
          this.playSound();
          setTimeout((res) => {
            this.stopAudio();
          }, 5000);
        }
      });
  }

  getCloneOfCenters(centers: Center[]): Center[] {
    return JSON.parse(JSON.stringify(centers));
  }
  getCloneOfSessions(session: Session[]): Session[] {
    return JSON.parse(JSON.stringify(session));
  }
  getCloneCenter(center: Center) {
    return JSON.parse(JSON.stringify(center));
  }
  searchByDistloop(distIs: number) {
    this.spinner = true;
    this.interval = setInterval(() => {
      this.searchByDist(distIs);
    }, this.config.timeInterval);
  }
  searchByPin(pin: string) {
    this.api.getVaccineListByPin(pin, this.getDate()).subscribe((res) => {
      this.vaccineByPinRsp = res;
    });
  }

  getDistById($event: string) {
    this.api.getStateDistricts($event).subscribe((res) => {
      this.districtList = res;
    });
  }

  getAllStates() {
    // this.api.getStateList().subscribe((res) => {
    //   this.stateList = res;
    // });
  }

  stopLoop(dist) {
    this.spinner = false;
    this.stopAudio();
    clearInterval(this.interval);
  }

  copyPinCode(pin: string) {
    this.clipboard.copy(pin);
  }
}
