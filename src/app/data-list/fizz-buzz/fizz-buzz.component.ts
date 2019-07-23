import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.css']
})
export class FizzBuzzComponent implements OnInit {
  @Input() dataPoint: number;
  text: string = '';

  constructor() { }

  ngOnInit() {
    this.findValue();
  }

  findValue(){
    if(this.dataPoint % 3 == 0){
      this.text += "fizz";
    }
    if(this.dataPoint % 5 == 0){
      this.text += "buzz";
    }
    if(this.text == ''){
      this.text = this.dataPoint.toString();
    }
  }

}
