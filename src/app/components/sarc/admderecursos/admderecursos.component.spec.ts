import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmderecursosComponent } from './admderecursos.component';

describe('AdmderecursosComponent', () => {
  let component: AdmderecursosComponent;
  let fixture: ComponentFixture<AdmderecursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmderecursosComponent]
    });
    fixture = TestBed.createComponent(AdmderecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
