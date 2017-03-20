/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NspectComponent } from './nspect.component';

describe('NspectComponent', () => {
  let component: NspectComponent;
  let fixture: ComponentFixture<NspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
