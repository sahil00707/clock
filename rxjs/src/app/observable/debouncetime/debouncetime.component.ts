import { Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.scss']
})
export class DebouncetimeComponent {
  reqData='';
@ViewChild('input')input:ElementRef | undefined;
ngAfterViewInit(){
let input=  fromEvent<any>(this.input?.nativeElement,'keyup')
input.pipe(
  debounceTime(1000),
  distinctUntilChanged(),
  map(res=>res.target.value)
).subscribe(res=>{
  console.log(res);
 // this.reqData=res

})
}
}
