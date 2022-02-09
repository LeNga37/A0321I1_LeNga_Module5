import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackernewsPracticeComponent } from './hackernews-practice.component';

describe('HackernewsPracticeComponent', () => {
  let component: HackernewsPracticeComponent;
  let fixture: ComponentFixture<HackernewsPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackernewsPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackernewsPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
