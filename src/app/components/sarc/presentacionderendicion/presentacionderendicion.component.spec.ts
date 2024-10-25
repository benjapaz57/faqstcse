import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionderendicionComponent } from './presentacionderendicion.component';

describe('PresentacionderendicionComponent', () => {
  let component: PresentacionderendicionComponent;
  let fixture: ComponentFixture<PresentacionderendicionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresentacionderendicionComponent]
    });
    fixture = TestBed.createComponent(PresentacionderendicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
