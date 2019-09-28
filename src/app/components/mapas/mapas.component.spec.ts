import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapasComponent } from './mapas.component';

describe('MapasComponent', () => {
  let component: MapasComponent;
  let fixture: ComponentFixture<MapasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapasComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
