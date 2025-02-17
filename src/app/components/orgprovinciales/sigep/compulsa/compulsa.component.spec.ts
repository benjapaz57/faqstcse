import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompulsaComponent } from './compulsa.component';

describe('CompulsaComponent', () => {
  let component: CompulsaComponent;
  let fixture: ComponentFixture<CompulsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompulsaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompulsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
