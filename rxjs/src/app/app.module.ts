import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { ObservableComponent } from './observable/observable.component';
import { AllComponent } from './observable/all/all.component';
import { FromEventCompComponent } from './observable/from-event-comp/from-event-comp.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { CustomobsComponent } from './observable/customobs/customobs.component';
import { MapoperComponent } from './observable/mapoper/mapoper.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TapComponent } from './observable/tap/tap.component';
import { RetryComponent } from './observable/retry/retry.component';
import { DebouncetimeComponent } from './observable/debouncetime/debouncetime.component';
//import { FromeventComponent } from './observable/fromevent/fromevent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ObservableComponent,
    AllComponent,
    FromEventCompComponent,
    IntervalComponent,
    OfFromComponent,
    CustomobsComponent,
    MapoperComponent,
    FilterComponent,
    TapComponent,
    RetryComponent,
    DebouncetimeComponent,
   // FromeventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
