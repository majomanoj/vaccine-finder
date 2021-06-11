import { Component, Input, OnInit } from "@angular/core";
import { VaccineByPinList } from "src/models/pincode-search";
import { StateList } from "src/models/state-info";
import { Center, Vaccine } from "src/models/vaccine-info";
import { VaccineService } from "src/services/vaccine.service";
import { map } from "rxjs/operators";
import { Clipboard } from "@angular/cdk/clipboard";
import { PinCodeModel } from "src/models/general";
import { DataService } from "src/services/data.service";
@Component({
  selector: "app-district-search",
  templateUrl: "./district-search.component.html",
  styleUrls: ["./district-search.component.sass"],
})
export class DistrictSearchComponent implements OnInit {
  @Input("districtId") districtId: number;
  // stateCode = 17;
  config = {
    dose1: true,
    timeInterval: 60000,
    minCount: 0,
    showPinCode2: false,
  };
  // stateList = {} as StateList;
  districtList = this.data.districtList;
  vaccineByPinRsp = {} as VaccineByPinList;
  date: string;
  pinCode: PinCodeModel = { is18Only: false } as PinCodeModel;
  pinCode2: PinCodeModel = { is18Only: false } as PinCodeModel;

  interval;
  audio;
  respList: Center[][] = [];
  spinner: boolean = false;
  constructor(
    private api: VaccineService,
    private clipboard: Clipboard,
    private data: DataService
  ) {}
  ngOnInit(): void {
    this.loadAudioFile();
    // this.getAllStates();
  }
  private loadAudioFile() {
    this.audio = new Audio();
    this.audio.src = "../../../assets/alert.mpeg";
    this.audio.load();
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
    return this.api
      .getVaccineListByDistrict(distIs, this.getDate())
      .pipe(
        map((res) => {
          let clonedRes = this.getCloneOfCenters(res.centers);
          let center1: Center[] = [];
          let center2: Center[] = [];
          clonedRes.forEach((c) => {
            let c1: Center = {};
            let c2: Center = {};
            c.sessions = c.sessions.filter(
              (s) =>
                (this.config.dose1
                  ? s.available_capacity_dose1 > this.config.minCount
                  : s.available_capacity_dose2 > this.config.minCount) &&
                (this.pinCode.is18Only && !this.config.showPinCode2
                  ? s.min_age_limit === 18
                  : s.min_age_limit > 0)
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

          if (!this.pinCode.pinCode && !this.pinCode2.pinCode) {
            return [
              ...[
                clonedRes.filter(
                  (res) => res.sessions.length > 0 && res.pincode != 685620
                ),
              ],
            ];
          }
          return this.filterOutViaPinCode(center1, center2);
        })
      )
      .subscribe((res) => {
        this.respList = res;
        if (res[0]?.length) {
          this.spinner = false;
          this.playSound();
          setTimeout(() => {
            this.stopAudio();
            localStorage.setItem(
              new Date().toDateString().replace(" ", ""),
              JSON.stringify(res)
            );
            // clearInterval(this.interval);
          }, 5000);
        }
      });
  }

  private filterOutViaPinCode(center1: Center[], center2: Center[]) {
    const listPinCodes1 = this.pinCode.pinCode?.replace(" ", "")?.split(",");
    const listPinCodes2 = this.pinCode2.pinCode?.replace(" ", "")?.split(",");
    const finalRes: any = [];
    finalRes.push(
      listPinCodes1
        ? center1.filter(
            (res) =>
              res.sessions.length > 0 &&
              listPinCodes1.indexOf(res.pincode.toString()) >= 0
          )
        : []
    );
    finalRes.push(
      listPinCodes2
        ? center2.filter(
            (res) =>
              res.sessions.length > 0 &&
              listPinCodes2.indexOf(res.pincode.toString()) >= 0
          )
        : []
    );
    return finalRes;
  }

  searchByDistloop(distIs: number) {
    this.stopLoop();
    this.spinner = true;
    this.searchByDist(distIs);

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

  //getAllStates() {
  // this.api.getStateList().subscribe((res) => {
  //   this.stateList = res;
  // });
  //}

  stopLoop() {
    this.spinner = false;
    this.stopAudio();
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.respList = [];
  }

  copyPinCode(pin: string) {
    this.clipboard.copy(pin);
  }

  private getCloneOfCenters(centers: Center[]): Center[] {
    return JSON.parse(JSON.stringify(centers));
  }

  private getCloneCenter(center: Center) {
    return JSON.parse(JSON.stringify(center));
  }
}
