import { Injectable } from "@angular/core";
import { DistrictList } from "src/models/district-info";
import { StateList } from "src/models/state-info";
import { Vaccine } from "src/models/vaccine-info";

@Injectable({
  providedIn: "root",
})
export class DataService {
  stateList: StateList = {
    states: [
      { state_id: 1, state_name: "Andaman and Nicobar Islands" },
      { state_id: 2, state_name: "Andhra Pradesh" },
      { state_id: 3, state_name: "Arunachal Pradesh" },
      { state_id: 4, state_name: "Assam" },
      { state_id: 5, state_name: "Bihar" },
      { state_id: 6, state_name: "Chandigarh" },
      { state_id: 7, state_name: "Chhattisgarh" },
      { state_id: 8, state_name: "Dadra and Nagar Haveli" },
      { state_id: 37, state_name: "Daman and Diu" },
      { state_id: 9, state_name: "Delhi" },
      { state_id: 10, state_name: "Goa" },
      { state_id: 11, state_name: "Gujarat" },
      { state_id: 12, state_name: "Haryana" },
      { state_id: 13, state_name: "Himachal Pradesh" },
      { state_id: 14, state_name: "Jammu and Kashmir" },
      { state_id: 15, state_name: "Jharkhand" },
      { state_id: 16, state_name: "Karnataka" },
      { state_id: 17, state_name: "Kerala" },
      { state_id: 18, state_name: "Ladakh" },
      { state_id: 19, state_name: "Lakshadweep" },
      { state_id: 20, state_name: "Madhya Pradesh" },
      { state_id: 21, state_name: "Maharashtra" },
      { state_id: 22, state_name: "Manipur" },
      { state_id: 23, state_name: "Meghalaya" },
      { state_id: 24, state_name: "Mizoram" },
      { state_id: 25, state_name: "Nagaland" },
      { state_id: 26, state_name: "Odisha" },
      { state_id: 27, state_name: "Puducherry" },
      { state_id: 28, state_name: "Punjab" },
      { state_id: 29, state_name: "Rajasthan" },
      { state_id: 30, state_name: "Sikkim" },
      { state_id: 31, state_name: "Tamil Nadu" },
      { state_id: 32, state_name: "Telangana" },
      { state_id: 33, state_name: "Tripura" },
      { state_id: 34, state_name: "Uttar Pradesh" },
      { state_id: 35, state_name: "Uttarakhand" },
      { state_id: 36, state_name: "West Bengal" },
    ],
    ttl: 24,
  };
  districtList: DistrictList = {
    districts: [
      { district_id: 301, district_name: "Alappuzha" },
      { district_id: 307, district_name: "Ernakulam" },
      { district_id: 306, district_name: "Idukki" },
      { district_id: 297, district_name: "Kannur" },
      { district_id: 295, district_name: "Kasaragod" },
      { district_id: 298, district_name: "Kollam" },
      { district_id: 304, district_name: "Kottayam" },
      { district_id: 305, district_name: "Kozhikode" },
      { district_id: 302, district_name: "Malappuram" },
      { district_id: 308, district_name: "Palakkad" },
      { district_id: 300, district_name: "Pathanamthitta" },
      { district_id: 296, district_name: "Thiruvananthapuram" },
      { district_id: 303, district_name: "Thrissur" },
      { district_id: 299, district_name: "Wayanad" },
    ],
    ttl: 24,
  };
  vaccineMock: Vaccine = {
    "centers": [
      {
        "center_id": 147415,
        "name": "Marayoor CHC",
        "address": "Marayoo P.O  Marayoo",
        "state_name": "Kerala",
        "district_name": "Idukki",
        "block_name": "Chithirapuram CHC",
        "pincode": 685620,
        "lat": 10,
        "long": 77,
        "from": "09:00:00",
        "to": "14:00:00",
        "fee_type": "Free",
        "sessions": [
          {
            "session_id": "ea376c96-2695-4057-89dc-40cffae77e64",
            "date": "13-06-2021",
            "available_capacity": 0,
            "min_age_limit": 45,
            "vaccine": "COVISHIELD",
            "slots": [
              "09:00AM-10:00AM",
              "10:00AM-11:00AM",
              "11:00AM-12:00PM",
              "12:00PM-02:00PM"
            ],
            "available_capacity_dose1": 0,
            "available_capacity_dose2": 0
          },
          {
            "session_id": "8f9623a2-22e2-4150-809c-0007bb784718",
            "date": "14-06-2021",
            "available_capacity": 0,
            "min_age_limit": 45,
            "vaccine": "COVISHIELD",
            "slots": [
              "09:00AM-10:00AM",
              "10:00AM-11:00AM",
              "11:00AM-12:00PM",
              "12:00PM-02:00PM"
            ],
            "available_capacity_dose1": 0,
            "available_capacity_dose2": 0
          }
        ]
      },
      {
        "center_id": 147446,
        "name": "Pampadumpara PHC",
        "address": "Pampadumpara P.O Pampadumpara",
        "state_name": "Kerala",
        "district_name": "Idukki",
        "block_name": "Pampadumpara CHC",
        "pincode": 685553,
        "lat": 9,
        "long": 77,
        "from": "09:00:00",
        "to": "14:00:00",
        "fee_type": "Free",
        "sessions": [
          {
            "session_id": "eeb264ad-2049-4a68-a483-0d8f710951e0",
            "date": "13-06-2021",
            "available_capacity": 0,
            "min_age_limit": 45,
            "vaccine": "COVISHIELD",
            "slots": [
              "09:00AM-10:00AM",
              "10:00AM-11:00AM",
              "11:00AM-12:00PM",
              "12:00PM-02:00PM"
            ],
            "available_capacity_dose1": 0,
            "available_capacity_dose2": 0
          }
        ]
      },
      {
        "center_id": 147592,
        "name": "Vandiperiyar CHC",
        "address": "Vandiperiyar P.O Vandiperiyar",
        "state_name": "Kerala",
        "district_name": "Idukki",
        "block_name": "Vandiperiyar CHC",
        "pincode": 685533,
        "lat": 9,
        "long": 77,
        "from": "09:00:00",
        "to": "14:00:00",
        "fee_type": "Free",
        "sessions": [
          {
            "session_id": "129a372e-70ee-4e07-949c-e06cc8a57144",
            "date": "14-06-2021",
            "available_capacity": 0,
            "min_age_limit": 45,
            "vaccine": "COVAXIN",
            "slots": [
              "09:00AM-10:00AM",
              "10:00AM-11:00AM",
              "11:00AM-12:00PM",
              "12:00PM-02:00PM"
            ],
            "available_capacity_dose1": 0,
            "available_capacity_dose2": 0
          }
        ]
      },
      {
        "center_id": 147291,
        "name": "Kattappana TH",
        "address": "Thovarayar P.O  Kattappana",
        "state_name": "Kerala",
        "district_name": "Idukki",
        "block_name": "Upputhara CHC",
        "pincode": 685511,
        "lat": 9,
        "long": 77,
        "from": "09:00:00",
        "to": "14:00:00",
        "fee_type": "Free",
        "sessions": [
          {
            "session_id": "c08b27ba-52fa-4987-a907-6c35876e4201",
            "date": "14-06-2021",
            "available_capacity": 6,
            "min_age_limit": 40,
            "vaccine": "COVAXIN",
            "slots": [
              "09:00AM-10:00AM",
              "10:00AM-11:00AM",
              "11:00AM-12:00PM",
              "12:00PM-02:00PM"
            ],
            "available_capacity_dose1": 6,
            "available_capacity_dose2": 0
          }
        ]
      },
      {
        "center_id": 563978,
        "name": "Merchant Trust Hall Thodupuzha",
        "address": "KARIKODE  THODUPUZHA",
        "state_name": "Kerala",
        "district_name": "Idukki",
        "block_name": "Purapuzha CHC",
        "pincode": 685585,
        "lat": 9,
        "long": 76,
        "from": "09:00:00",
        "to": "14:00:00",
        "fee_type": "Free",
        "sessions": [
          {
            "session_id": "ba910924-6edd-420c-9742-6afa03242419",
            "date": "14-06-2021",
            "available_capacity": 0,
            "min_age_limit": 45,
            "vaccine": "COVAXIN",
            "slots": [
              "09:00AM-10:00AM",
              "10:00AM-11:00AM",
              "11:00AM-12:00PM",
              "12:00PM-02:00PM"
            ],
            "available_capacity_dose1": 0,
            "available_capacity_dose2": 0
          }
        ]
      },
      {
        "center_id": 666580,
        "name": "Elamdesham CHC",
        "address": "Elamdesham",
        "state_name": "Kerala",
        "district_name": "Idukki",
        "block_name": "Muttom CHC",
        "pincode": 685588,
        "lat": 9,
        "long": 76,
        "from": "09:00:00",
        "to": "14:00:00",
        "fee_type": "Free",
        "sessions": [
          {
            "session_id": "b3617f46-d006-417d-8441-4773f16da087",
            "date": "14-06-2021",
            "available_capacity": 0,
            "min_age_limit": 45,
            "vaccine": "COVISHIELD",
            "slots": [
              "09:00AM-10:00AM",
              "10:00AM-11:00AM",
              "11:00AM-12:00PM",
              "12:00PM-02:00PM"
            ],
            "available_capacity_dose1": 0,
            "available_capacity_dose2": 0
          }
        ]
      },
      {
        "center_id": 147071,
        "name": "Adimali THQH",
        "address": "Adimali P.O  Adimali",
        "state_name": "Kerala",
        "district_name": "Idukki",
        "block_name": "Chithirapuram CHC",
        "pincode": 685561,
        "lat": 10,
        "long": 76,
        "from": "09:00:00",
        "to": "14:00:00",
        "fee_type": "Free",
        "sessions": [
          {
            "session_id": "03975442-6a05-46f4-8f21-33334a683593",
            "date": "14-06-2021",
            "available_capacity": 0,
            "min_age_limit": 45,
            "vaccine": "COVAXIN",
            "slots": [
              "09:00AM-10:00AM",
              "10:00AM-11:00AM",
              "11:00AM-12:00PM",
              "12:00PM-02:00PM"
            ],
            "available_capacity_dose1": 0,
            "available_capacity_dose2": 0
          }
        ]
      },
      {
        "center_id": 735528,
        "name": "MMU Tribal Health",
        "address": "MMU Tribal",
        "state_name": "Kerala",
        "district_name": "Idukki",
        "block_name": "Muttom CHC",
        "pincode": 685588,
        "lat": 9,
        "long": 76,
        "from": "09:00:00",
        "to": "14:00:00",
        "fee_type": "Free",
        "sessions": [
          {
            "session_id": "a7f07008-64ce-43af-b3fa-af905abe9bca",
            "date": "14-06-2021",
            "available_capacity": 0,
            "min_age_limit": 45,
            "vaccine": "COVISHIELD",
            "slots": [
              "09:00AM-10:00AM",
              "10:00AM-11:00AM",
              "11:00AM-12:00PM",
              "12:00PM-02:00PM"
            ],
            "available_capacity_dose1": 0,
            "available_capacity_dose2": 0
          }
        ]
      },
      {
        "center_id": 567455,
        "name": "CHITHIRAPURAM Community HC",
        "address": "CHITHIRAPURAM CHITHIRAPURAM",
        "state_name": "Kerala",
        "district_name": "Idukki",
        "block_name": "Chithirapuram CHC",
        "pincode": 685565,
        "lat": 10,
        "long": 77,
        "from": "09:00:00",
        "to": "14:00:00",
        "fee_type": "Free",
        "sessions": [
          {
            "session_id": "42128066-dd45-4146-bb6a-97dac978aa38",
            "date": "14-06-2021",
            "available_capacity": 0,
            "min_age_limit": 45,
            "vaccine": "COVISHIELD",
            "slots": [
              "09:00AM-10:00AM",
              "10:00AM-11:00AM",
              "11:00AM-12:00PM",
              "12:00PM-02:00PM"
            ],
            "available_capacity_dose1": 0,
            "available_capacity_dose2": 0
          }
        ]
      },
      {
        "center_id": 147303,
        "name": "Kodikulam PHC",
        "address": "Kodikulam P.O  Kodikulam",
        "state_name": "Kerala",
        "district_name": "Idukki",
        "block_name": "Muttom CHC",
        "pincode": 685582,
        "lat": 9,
        "long": 76,
        "from": "09:00:00",
        "to": "14:00:00",
        "fee_type": "Free",
        "sessions": [
          {
            "session_id": "4c81e88e-d31f-463c-b912-36f74b27d335",
            "date": "14-06-2021",
            "available_capacity": 0,
            "min_age_limit": 40,
            "vaccine": "COVISHIELD",
            "slots": [
              "09:00AM-10:00AM",
              "10:00AM-11:00AM",
              "11:00AM-12:00PM",
              "12:00PM-02:00PM"
            ],
            "available_capacity_dose1": 0,
            "available_capacity_dose2": 0
          }
        ]
      },
      {
        "center_id": 147150,
        "name": "Deviyar Colony PHC",
        "address": "10 Mile Valara P.O",
        "state_name": "Kerala",
        "district_name": "Idukki",
        "block_name": "Chithirapuram CHC",
        "pincode": 685561,
        "lat": 10,
        "long": 76,
        "from": "09:00:00",
        "to": "14:00:00",
        "fee_type": "Free",
        "sessions": [
          {
            "session_id": "4bc9c3c6-a70d-485a-9697-78ce6a2a869a",
            "date": "14-06-2021",
            "available_capacity": 0,
            "min_age_limit": 45,
            "vaccine": "COVAXIN",
            "slots": [
              "09:00AM-10:00AM",
              "10:00AM-11:00AM",
              "11:00AM-12:00PM",
              "12:00PM-02:00PM"
            ],
            "available_capacity_dose1": 0,
            "available_capacity_dose2": 0
          }
        ]
      },
      {
        "center_id": 147095,
        "name": "Bisonvally PHC",
        "address": "Bisonvally P.O Bisonvally",
        "state_name": "Kerala",
        "district_name": "Idukki",
        "block_name": "Rajakkadu CHC",
        "pincode": 685565,
        "lat": 10,
        "long": 77,
        "from": "09:00:00",
        "to": "14:00:00",
        "fee_type": "Free",
        "sessions": [
          {
            "session_id": "156c16ef-eae0-48b8-bcf1-a7571d36110f",
            "date": "14-06-2021",
            "available_capacity": 0,
            "min_age_limit": 45,
            "vaccine": "COVISHIELD",
            "slots": [
              "09:00AM-10:00AM",
              "10:00AM-11:00AM",
              "11:00AM-12:00PM",
              "12:00PM-02:00PM"
            ],
            "available_capacity_dose1": 0,
            "available_capacity_dose2": 0
          }
        ]
      },
      {
        "center_id": 147374,
        "name": "Kumily FHC",
        "address": "Kumali P.O Kumali",
        "state_name": "Kerala",
        "district_name": "Idukki",
        "block_name": "Vandiperiyar CHC",
        "pincode": 685509,
        "lat": 9,
        "long": 77,
        "from": "09:00:00",
        "to": "14:00:00",
        "fee_type": "Free",
        "sessions": [
          {
            "session_id": "1fa16070-037c-4ef8-817a-5e25b813dc9a",
            "date": "14-06-2021",
            "available_capacity": 0,
            "min_age_limit": 45,
            "vaccine": "COVAXIN",
            "slots": [
              "09:00AM-10:00AM",
              "10:00AM-11:00AM",
              "11:00AM-12:00PM",
              "12:00PM-02:00PM"
            ],
            "available_capacity_dose1": 0,
            "available_capacity_dose2": 0
          }
        ]
      },
      {
        "center_id": 147358,
        "name": "Kudayathoor PHC",
        "address": "Kudayathoor P.O Kudayathoor",
        "state_name": "Kerala",
        "district_name": "Idukki",
        "block_name": "Muttom CHC",
        "pincode": 685590,
        "lat": 9,
        "long": 76,
        "from": "09:00:00",
        "to": "14:00:00",
        "fee_type": "Free",
        "sessions": [
          {
            "session_id": "04494d59-3e0d-4434-b8a7-2c06390ffca2",
            "date": "14-06-2021",
            "available_capacity": 0,
            "min_age_limit": 40,
            "vaccine": "COVISHIELD",
            "slots": [
              "09:00AM-10:00AM",
              "10:00AM-11:00AM",
              "11:00AM-12:00PM",
              "12:00PM-02:00PM"
            ],
            "available_capacity_dose1": 0,
            "available_capacity_dose2": 0
          }
        ]
      },
      {
        "center_id": 147644,
        "name": "Vazhathope PHC",
        "address": "Maniyarankudy P.OVazhathop",
        "state_name": "Kerala",
        "district_name": "Idukki",
        "block_name": "Muttom CHC",
        "pincode": 685602,
        "lat": 9,
        "long": 76,
        "from": "09:00:00",
        "to": "14:00:00",
        "fee_type": "Free",
        "sessions": [
          {
            "session_id": "e0c1787d-1e71-43c6-b81f-a34a0f0968b8",
            "date": "14-06-2021",
            "available_capacity": 0,
            "min_age_limit": 45,
            "vaccine": "COVISHIELD",
            "slots": [
              "09:00AM-10:00AM",
              "10:00AM-11:00AM",
              "11:00AM-12:00PM",
              "12:00PM-02:00PM"
            ],
            "available_capacity_dose1": 0,
            "available_capacity_dose2": 0
          }
        ]
      },
      {
        "center_id": 147230,
        "name": "Kanjikuzhy CHC",
        "address": "Kanjikuzhy P.O  Kanjikuzhy",
        "state_name": "Kerala",
        "district_name": "Idukki",
        "block_name": "Muttom CHC",
        "pincode": 685606,
        "lat": 9,
        "long": 76,
        "from": "09:00:00",
        "to": "14:00:00",
        "fee_type": "Free",
        "sessions": [
          {
            "session_id": "ba70026d-3f94-4ef7-b135-b4c346541860",
            "date": "14-06-2021",
            "available_capacity": 69,
            "min_age_limit": 40,
            "vaccine": "COVISHIELD",
            "slots": [
              "09:00AM-10:00AM",
              "10:00AM-11:00AM",
              "11:00AM-12:00PM",
              "12:00PM-02:00PM"
            ],
            "available_capacity_dose1": 69,
            "available_capacity_dose2": 0
          }
        ]
      },
      {
        "center_id": 147463,
        "name": "Parakadavu UPHC",
        "address": "Kolani P.O Parakadavu",
        "state_name": "Kerala",
        "district_name": "Idukki",
        "block_name": "Purapuzha CHC",
        "pincode": 685608,
        "lat": 9,
        "long": 76,
        "from": "09:00:00",
        "to": "14:00:00",
        "fee_type": "Free",
        "sessions": [
          {
            "session_id": "a669abcf-fd37-4f94-8424-c4a670123333",
            "date": "14-06-2021",
            "available_capacity": 0,
            "min_age_limit": 45,
            "vaccine": "COVAXIN",
            "slots": [
              "09:00AM-10:00AM",
              "10:00AM-11:00AM",
              "11:00AM-12:00PM",
              "12:00PM-02:00PM"
            ],
            "available_capacity_dose1": 0,
            "available_capacity_dose2": 0
          }
        ]
      },
      {
        "center_id": 147251,
        "name": "Karimannoor FHC",
        "address": "Karimannoor P.O Thodupuzha",
        "state_name": "Kerala",
        "district_name": "Idukki",
        "block_name": "Muttom CHC",
        "pincode": 685581,
        "lat": 9,
        "long": 76,
        "from": "09:00:00",
        "to": "14:00:00",
        "fee_type": "Free",
        "sessions": [
          {
            "session_id": "509a4e1d-2319-49eb-9096-3cdfcc9ad6d4",
            "date": "14-06-2021",
            "available_capacity": 0,
            "min_age_limit": 18,
            "vaccine": "COVISHIELD",
            "slots": [
              "09:00AM-10:00AM",
              "10:00AM-11:00AM",
              "11:00AM-12:00PM",
              "12:00PM-02:00PM"
            ],
            "available_capacity_dose1": 10,
            "available_capacity_dose2": 0
          }
        ]
      },
      {
        "center_id": 147240,
        "name": "Kanthalloor PHC",
        "address": "Kanthaloor P.O  Kanthaloor",
        "state_name": "Kerala",
        "district_name": "Idukki",
        "block_name": "Chithirapuram CHC",
        "pincode": 685620,
        "lat": 10,
        "long": 77,
        "from": "09:00:00",
        "to": "14:00:00",
        "fee_type": "Free",
        "sessions": [
          {
            "session_id": "f1a8b47d-9b72-4a20-829c-8ef6ba1467b0",
            "date": "14-06-2021",
            "available_capacity": 0,
            "min_age_limit": 45,
            "vaccine": "COVISHIELD",
            "slots": [
              "09:00AM-10:00AM",
              "10:00AM-11:00AM",
              "11:00AM-12:00PM",
              "12:00PM-02:00PM"
            ],
            "available_capacity_dose1": 0,
            "available_capacity_dose2": 0
          }
        ]
      },
      {
        "center_id": 628105,
        "name": "Idukki DH Medical Collage Idki",
        "address": "Idukki Medical Collage Building",
        "state_name": "Kerala",
        "district_name": "Idukki",
        "block_name": "Muttom CHC",
        "pincode": 685603,
        "lat": 9,
        "long": 77,
        "from": "09:00:00",
        "to": "14:00:00",
        "fee_type": "Free",
        "sessions": [
          {
            "session_id": "f1853851-11ee-4bbb-87e5-54c1e71102ea",
            "date": "14-06-2021",
            "available_capacity": 0,
            "min_age_limit": 45,
            "vaccine": "COVISHIELD",
            "slots": [
              "09:00AM-10:00AM",
              "10:00AM-11:00AM",
              "11:00AM-12:00PM",
              "12:00PM-02:00PM"
            ],
            "available_capacity_dose1": 0,
            "available_capacity_dose2": 0
          }
        ]
      },
      {
        "center_id": 147309,
        "name": "Kokkayar PHC",
        "address": "Meloram P.O Meloram",
        "state_name": "Kerala",
        "district_name": "Idukki",
        "block_name": "Vandiperiyar CHC",
        "pincode": 685532,
        "lat": 9,
        "long": 76,
        "from": "09:00:00",
        "to": "18:00:00",
        "fee_type": "Free",
        "sessions": [
          {
            "session_id": "3f5d2179-a2a1-472c-a44b-2d9e2770ee13",
            "date": "14-06-2021",
            "available_capacity": 0,
            "min_age_limit": 45,
            "vaccine": "COVAXIN",
            "slots": [
              "09:00AM-11:00AM",
              "11:00AM-01:00PM",
              "01:00PM-03:00PM",
              "03:00PM-06:00PM"
            ],
            "available_capacity_dose1": 0,
            "available_capacity_dose2": 0
          }
        ]
      },
      {
        "center_id": 147146,
        "name": "Devikulam CHC",
        "address": "Devikulam P.O Devikulam",
        "state_name": "Kerala",
        "district_name": "Idukki",
        "block_name": "Chithirapuram CHC",
        "pincode": 685613,
        "lat": 9,
        "long": 8,
        "from": "09:00:00",
        "to": "14:00:00",
        "fee_type": "Free",
        "sessions": [
          {
            "session_id": "ded83b4a-af31-41f8-ab3b-e35b015e1748",
            "date": "14-06-2021",
            "available_capacity": 0,
            "min_age_limit": 45,
            "vaccine": "COVISHIELD",
            "slots": [
              "09:00AM-10:00AM",
              "10:00AM-11:00AM",
              "11:00AM-12:00PM",
              "12:00PM-02:00PM"
            ],
            "available_capacity_dose1": 0,
            "available_capacity_dose2": 0
          }
        ]
      },
      {
        "center_id": 667499,
        "name": "Mariyapuram FHC",
        "address": "Mariyapuram",
        "state_name": "Kerala",
        "district_name": "Idukki",
        "block_name": "Upputhara CHC",
        "pincode": 685604,
        "lat": 9,
        "long": 77,
        "from": "09:00:00",
        "to": "14:00:00",
        "fee_type": "Free",
        "sessions": [
          {
            "session_id": "3d54423d-31ad-4c7c-9de9-bb0155db015d",
            "date": "14-06-2021",
            "available_capacity": 20,
            "min_age_limit": 18,
            "vaccine": "COVISHIELD",
            "slots": [
              "09:00AM-10:00AM",
              "10:00AM-11:00AM",
              "11:00AM-12:00PM",
              "12:00PM-02:00PM"
            ],
            "available_capacity_dose1": 10,
            "available_capacity_dose2": 0
          },
          {
            "session_id": "52322024-2a21-41ef-b819-9156d76aa30d",
            "date": "14-06-2021",
            "available_capacity": 0,
            "min_age_limit": 45,
            "vaccine": "COVISHIELD",
            "slots": [
              "09:00AM-10:00AM",
              "10:00AM-11:00AM",
              "11:00AM-12:00PM",
              "12:00PM-02:00PM"
            ],
            "available_capacity_dose1": 0,
            "available_capacity_dose2": 0
          }
        ]
      }
    ]
  };
  constructor() {}
}
