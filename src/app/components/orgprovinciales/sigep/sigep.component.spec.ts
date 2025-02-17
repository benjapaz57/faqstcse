import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigepComponent } from './sigep.component';

describe('SigepComponent', () => {
  let component: SigepComponent;
  let fixture: ComponentFixture<SigepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
