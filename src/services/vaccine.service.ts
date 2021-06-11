import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { VaccineUrl } from "src/models/api-endpoints";
import { DistrictList } from "src/models/district-info";
import { VaccineByPinList } from "src/models/pincode-search";
import { StateList } from "src/models/state-info";
import { of } from "rxjs";

import { Vaccine } from "src/models/vaccine-info";
import { Observable } from "rxjs";
import { DataService } from "./data.service";
import { FindByDistrict } from "src/models/find-by-dist";
@Injectable({
  providedIn: "root",
})
export class VaccineService {
  constructor(private http: HttpClient, private data: DataService) {}

  getVaccineListByPin(pincode: string, date: string) {
    const opts = {
      params: new HttpParams({
        fromString: `pincode=${pincode}&date=${date}`,
      }),
      headers: this.setHeader(),
    };
    return this.http.get<VaccineByPinList>(VaccineUrl.SearchBypin, opts);
  }

  getStateList() {
    return this.http.get<StateList>(VaccineUrl.StateList);
  }

  getStateDistricts(id: string) {
    return this.http.get<DistrictList>(VaccineUrl.DistrictList + "/" + id);
  }
  getVaccineListByDistrict(districtId: number, date: string) {
    const opts = {
      params: new HttpParams({
        fromString: `district_id=${districtId}&date=${date}`,
      }),
      headers: this.setHeader(),
    };
    //  return this.http.get<Vaccine>(VaccineUrl.SearchByDist, opts);
    return of(this.data.vaccineMock);
  }

  getVaccineFindByDistrict(
    districtId: number,
    date: string
  ): Observable<FindByDistrict> {
    const opts = {
      params: new HttpParams({
        fromString: `district_id=${districtId}&date=${date}`,
      }),
      headers: this.setHeader(),
    };
    return this.http.get<FindByDistrict>(VaccineUrl.findByDist, opts);
  }

  setHeader() {
    let headers = new HttpHeaders();
    return (headers = headers.set(
      "Content-Type",
      "application/json; charset=utf-8"
    ));
  }
}
