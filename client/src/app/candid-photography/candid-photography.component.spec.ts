import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidPhotographyComponent } from './candid-photography.component';

describe('CandidPhotographyComponent', () => {
  let component: CandidPhotographyComponent;
  let fixture: ComponentFixture<CandidPhotographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidPhotographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidPhotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
