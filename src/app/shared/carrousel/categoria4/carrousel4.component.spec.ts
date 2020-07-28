import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carrousel4Component } from './carrousel4.component';

describe('Carrousel4Component', () => {
  let component: Carrousel4Component;
  let fixture: ComponentFixture<Carrousel4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carrousel4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carrousel4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
