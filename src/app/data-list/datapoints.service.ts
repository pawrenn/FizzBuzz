import { Injectable } from '@angular/core';

@Injectable()

export class DatapointsService {
  dataPoints: number[] = [];
  
  constructor() {
    for(let i = 0; i < 100; i++){
      this.dataPoints[i] = i+1;
    }
   }
   
   getDataPoints(){
     return this.dataPoints.slice();
   }
}
