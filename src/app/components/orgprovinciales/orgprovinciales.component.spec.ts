import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgprovincialesComponent } from './orgprovinciales.component';

describe('OrgprovincialesComponent', () => {
  let component: OrgprovincialesComponent;
  let fixture: ComponentFixture<OrgprovincialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrgprovincialesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgprovincialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
