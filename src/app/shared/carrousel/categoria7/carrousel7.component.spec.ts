import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carrousel7Component } from './carrousel7.component';

describe('Carrousel7Component', () => {
  let component: Carrousel7Component;
  let fixture: ComponentFixture<Carrousel7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carrousel7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carrousel7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
