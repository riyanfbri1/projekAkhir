import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisitambahdataComponent } from './divisitambahdata.component';

describe('DivisitambahdataComponent', () => {
  let component: DivisitambahdataComponent;
  let fixture: ComponentFixture<DivisitambahdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisitambahdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisitambahdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
