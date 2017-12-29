import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlexandrSarioglo } from './alexandr-sarioglo.component';

describe('AlexandrSarioglo', () => {
  let component: AlexandrSarioglo;
  let fixture: ComponentFixture<AlexandrSarioglo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlexandrSarioglo ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlexandrSarioglo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
