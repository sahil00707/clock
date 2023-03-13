import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event-comp',
  templateUrl: './from-event-comp.component.html',
  styleUrls: ['./from-event-comp.component.scss']
})
export class FromEventCompComponent {
@ViewChild('addBtn')addBtn:ElementRef | undefined;
ngAfterViewInit(){
  let count=0;
 fromEvent(this.addBtn?.nativeElement,'click').subscribe((res)=>{
  
  let li=document.createElement('li');
  li.innerText='Video'+count++;
  document.getElementById('ul')?.appendChild(li)
  
 }) 
}
}
