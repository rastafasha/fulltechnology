import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carrousel3Component } from './carrousel3.component';

describe('Carrousel3Component', () => {
  let component: Carrousel3Component;
  let fixture: ComponentFixture<Carrousel3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carrousel3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carrousel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
