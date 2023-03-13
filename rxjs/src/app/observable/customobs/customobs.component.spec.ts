import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomobsComponent } from './customobs.component';

describe('CustomobsComponent', () => {
  let component: CustomobsComponent;
  let fixture: ComponentFixture<CustomobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
