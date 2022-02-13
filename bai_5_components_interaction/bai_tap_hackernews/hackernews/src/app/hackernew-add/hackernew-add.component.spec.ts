import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackernewAddComponent } from './hackernew-add.component';

describe('HackernewAddComponent', () => {
  let component: HackernewAddComponent;
  let fixture: ComponentFixture<HackernewAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackernewAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackernewAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
