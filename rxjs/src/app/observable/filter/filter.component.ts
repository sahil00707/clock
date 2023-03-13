import { Component } from '@angular/core';
import { filter, from, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  dataArr = from([
    {
      name: "sahil",
      age: 20,
      number: 8320225810
    },
    {
      name: "harsh",
      age: 19,
      number: 77709477454
    },
    {
      name: "batak",
      age: 19,
      number: 9574174549
    }
    ,
    {
      name: "irfan",
      age: 18,
      number: 9106972021
    }
  ])
  ngAfterViewInit() {
this.dataArr.pipe(
  filter(data=>data.age==19)
).subscribe(data=>{
  console.log(data);
  
})
  }
}
