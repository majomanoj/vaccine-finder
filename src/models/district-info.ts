export interface District {
  district_id: number;
  district_name: string;
}

export interface DistrictList {
  districts: District[];
  ttl: number;
}
