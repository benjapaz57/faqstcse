import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraspublicasComponent } from './obraspublicas.component';

describe('ObraspublicasComponent', () => {
  let component: ObraspublicasComponent;
  let fixture: ComponentFixture<ObraspublicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObraspublicasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObraspublicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
