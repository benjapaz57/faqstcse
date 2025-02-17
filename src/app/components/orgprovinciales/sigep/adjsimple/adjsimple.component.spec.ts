import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjsimpleComponent } from './adjsimple.component';

describe('AdjsimpleComponent', () => {
  let component: AdjsimpleComponent;
  let fixture: ComponentFixture<AdjsimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdjsimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdjsimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
