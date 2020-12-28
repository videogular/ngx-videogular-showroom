import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VgPipComponent } from './vg-pip.component';

describe('VgPipComponent', () => {
  let component: VgPipComponent;
  let fixture: ComponentFixture<VgPipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VgPipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VgPipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
