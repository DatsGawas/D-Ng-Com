import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DNgComComponent } from './d-ng-com.component';

describe('DNgComComponent', () => {
  let component: DNgComComponent;
  let fixture: ComponentFixture<DNgComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DNgComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DNgComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
