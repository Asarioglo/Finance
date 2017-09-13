import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicValuationComponent } from './basic-valuation.component';

describe('BasicValuationComponent', () => {
  let component: BasicValuationComponent;
  let fixture: ComponentFixture<BasicValuationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicValuationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicValuationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
