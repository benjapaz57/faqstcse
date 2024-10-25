import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsarcComponent } from './faqsarc.component';

describe('FaqsarcComponent', () => {
  let component: FaqsarcComponent;
  let fixture: ComponentFixture<FaqsarcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqsarcComponent]
    });
    fixture = TestBed.createComponent(FaqsarcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
