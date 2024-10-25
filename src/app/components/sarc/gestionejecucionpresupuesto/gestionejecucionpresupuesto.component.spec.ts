import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionejecucionpresupuestoComponent } from './gestionejecucionpresupuesto.component';

describe('GestionejecucionpresupuestoComponent', () => {
  let component: GestionejecucionpresupuestoComponent;
  let fixture: ComponentFixture<GestionejecucionpresupuestoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionejecucionpresupuestoComponent]
    });
    fixture = TestBed.createComponent(GestionejecucionpresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
