import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdendepagoComponent } from './ordendepago.component';

describe('OrdendepagoComponent', () => {
  let component: OrdendepagoComponent;
  let fixture: ComponentFixture<OrdendepagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdendepagoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdendepagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
