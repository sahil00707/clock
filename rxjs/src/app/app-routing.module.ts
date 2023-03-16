import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { ObservableComponent } from './observable/observable.component';
import { FromEventCompComponent } from './observable/from-event-comp/from-event-comp.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { CustomobsComponent } from './observable/customobs/customobs.component';
import { MapoperComponent } from './observable/mapoper/mapoper.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TapComponent } from './observable/tap/tap.component';
import { RetryComponent } from './observable/retry/retry.component';
import { DebouncetimeComponent } from './observable/debouncetime/debouncetime.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'app-header',
    component: HeaderComponent,
  },
  {
    path: 'app-observable',
    component: ObservableComponent,
    children: [
      {
        path: 'from-event-comp',
        component: FromEventCompComponent
      },
      {
        path: 'interval',
        component: IntervalComponent
      },
      {
        path: 'of-from',
        component: OfFromComponent
      },
      {
        path: 'customobs',
        component: CustomobsComponent
      },
      {
        path: 'mapoper',
        component: MapoperComponent
      },
      {
        path: 'filter',
        component: FilterComponent
      },
      {
        path: 'tap',
        component: TapComponent
      },
      {
        path: 'retry',
        component: RetryComponent
      },
      {
        path: 'debouncetime',
        component: DebouncetimeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
