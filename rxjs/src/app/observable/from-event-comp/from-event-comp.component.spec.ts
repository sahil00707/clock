import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromEventCompComponent } from './from-event-comp.component';

describe('FromEventCompComponent', () => {
  let component: FromEventCompComponent;
  let fixture: ComponentFixture<FromEventCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromEventCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromEventCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
