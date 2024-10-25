import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosarcComponent } from './ingresosarc.component';

describe('IngresosarcComponent', () => {
  let component: IngresosarcComponent;
  let fixture: ComponentFixture<IngresosarcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresosarcComponent]
    });
    fixture = TestBed.createComponent(IngresosarcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
