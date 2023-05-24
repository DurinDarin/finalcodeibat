import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikestationComponent } from './bikestation.component';

describe('BikestationComponent', () => {
  let component: BikestationComponent;
  let fixture: ComponentFixture<BikestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikestationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
