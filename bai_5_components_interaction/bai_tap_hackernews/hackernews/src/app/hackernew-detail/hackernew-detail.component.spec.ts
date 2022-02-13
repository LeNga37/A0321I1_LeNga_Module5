import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackernewDetailComponent } from './hackernew-detail.component';

describe('HackernewDetailComponent', () => {
  let component: HackernewDetailComponent;
  let fixture: ComponentFixture<HackernewDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackernewDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackernewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
