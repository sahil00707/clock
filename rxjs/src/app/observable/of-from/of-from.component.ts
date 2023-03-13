import { Component } from '@angular/core';
import { of, toArray } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent {
ngAfterViewInit(){
  let x=of(1,2,3,4);
  x.pipe(
    toArray()
  ).subscribe(res=>{
    console.log(res);
    
  })
}
}
