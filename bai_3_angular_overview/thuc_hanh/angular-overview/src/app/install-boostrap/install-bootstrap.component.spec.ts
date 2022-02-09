import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallBoostrapComponent } from './install-boostrap.component';

describe('InstallBoostrapComponent', () => {
  let component: InstallBoostrapComponent;
  let fixture: ComponentFixture<InstallBoostrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallBoostrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallBoostrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
