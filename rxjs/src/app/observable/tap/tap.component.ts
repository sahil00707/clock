import { Component } from '@angular/core';
import { from, map, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent {
  ngAfterViewInit() {
    let data = from(['sahil', 'harsh', 'maulik', 'batak', 'abbcddd', 'irfan']);
    let obs: any;
    obs = data.pipe(
    ).subscribe(res => {
    if (res === 'batak') {
      obs.unsubscribe()
    }
    })
  }
}
