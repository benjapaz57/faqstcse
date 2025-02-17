import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienesyservComponent } from './bienesyserv.component';

describe('BienesyservComponent', () => {
  let component: BienesyservComponent;
  let fixture: ComponentFixture<BienesyservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BienesyservComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BienesyservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
