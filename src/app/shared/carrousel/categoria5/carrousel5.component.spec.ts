import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carrousel5Component } from './carrousel5.component';

describe('Carrousel5Component', () => {
  let component: Carrousel5Component;
  let fixture: ComponentFixture<Carrousel5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carrousel5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carrousel5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
