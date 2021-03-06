import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  districtId = 307;
  districtList = this.data.districtList;
  constructor(private data: DataService) {}
  ngAfterViewInit(): void {}
  ngOnInit(): void {}
}
