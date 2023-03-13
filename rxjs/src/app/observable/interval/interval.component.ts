import { Component } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent {
ngAfterViewInit(){
  let int=timer(1000,500);
 let x= int.subscribe(res=>{
   this.createElem()
    if(res>5){
      x.unsubscribe()
    }
  })
}
createElem(){
  let li=document.createElement('li');
  li.innerText='sahil';
  document.getElementById('ul')?.appendChild(li)
}
}
