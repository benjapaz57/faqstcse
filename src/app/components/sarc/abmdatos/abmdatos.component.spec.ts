import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmdatosComponent } from './abmdatos.component';

describe('AbmdatosComponent', () => {
  let component: AbmdatosComponent;
  let fixture: ComponentFixture<AbmdatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbmdatosComponent]
    });
    fixture = TestBed.createComponent(AbmdatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
