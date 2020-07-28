import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carrousel6Component } from './carrousel6.component';

describe('Carrousel6Component', () => {
  let component: Carrousel6Component;
  let fixture: ComponentFixture<Carrousel6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carrousel6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carrousel6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
