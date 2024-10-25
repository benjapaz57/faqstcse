import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarconormativolegalComponent } from './marconormativolegal.component';

describe('MarconormativolegalComponent', () => {
  let component: MarconormativolegalComponent;
  let fixture: ComponentFixture<MarconormativolegalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarconormativolegalComponent]
    });
    fixture = TestBed.createComponent(MarconormativolegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
