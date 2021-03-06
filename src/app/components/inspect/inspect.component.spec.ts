/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InspectComponent } from './inspect.component';

describe('InspectComponent', () => {
  let component: InspectComponent;
  let fixture: ComponentFixture<InspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
