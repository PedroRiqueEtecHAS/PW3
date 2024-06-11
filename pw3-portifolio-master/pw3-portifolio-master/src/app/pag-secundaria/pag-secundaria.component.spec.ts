import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagSecundariaComponent } from './pag-secundaria.component';

describe('PagSecundariaComponent', () => {
  let component: PagSecundariaComponent;
  let fixture: ComponentFixture<PagSecundariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagSecundariaComponent]
    });
    fixture = TestBed.createComponent(PagSecundariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
