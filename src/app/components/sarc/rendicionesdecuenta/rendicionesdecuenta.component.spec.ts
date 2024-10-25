import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendicionesdecuentaComponent } from './rendicionesdecuenta.component';

describe('RendicionesdecuentaComponent', () => {
  let component: RendicionesdecuentaComponent;
  let fixture: ComponentFixture<RendicionesdecuentaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RendicionesdecuentaComponent]
    });
    fixture = TestBed.createComponent(RendicionesdecuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
