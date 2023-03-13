import { Component } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-mapoper',
  templateUrl: './mapoper.component.html',
  styleUrls: ['./mapoper.component.scss']
})
export class MapoperComponent {
ngAfterViewInit(){
  let x=interval(1000);
  x.pipe(
    map(data=>'sahil'+data)
  ).subscribe(res=>{
    console.log(res);
    
  })
}
}
