import { Component, OnInit } from '@angular/core';
import { DatapointsService } from './datapoints.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css'],
  providers: [DatapointsService]
})
export class DataListComponent implements OnInit {
  dataPoints: number[];

  constructor(private dataPointsService: DatapointsService) { }

  ngOnInit() {
    this.dataPoints = this.dataPointsService.getDataPoints();
  }

}
