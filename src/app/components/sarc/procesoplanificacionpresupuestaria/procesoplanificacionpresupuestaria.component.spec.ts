import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoplanificacionpresupuestariaComponent } from './procesoplanificacionpresupuestaria.component';

describe('ProcesoplanificacionpresupuestariaComponent', () => {
  let component: ProcesoplanificacionpresupuestariaComponent;
  let fixture: ComponentFixture<ProcesoplanificacionpresupuestariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcesoplanificacionpresupuestariaComponent]
    });
    fixture = TestBed.createComponent(ProcesoplanificacionpresupuestariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
