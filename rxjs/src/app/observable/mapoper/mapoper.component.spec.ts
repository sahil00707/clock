import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapoperComponent } from './mapoper.component';

describe('MapoperComponent', () => {
  let component: MapoperComponent;
  let fixture: ComponentFixture<MapoperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapoperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapoperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
