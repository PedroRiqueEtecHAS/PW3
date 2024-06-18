import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagTerceariaComponent } from './pag-tercearia.component';

describe('PagTerceariaComponent', () => {
  let component: PagTerceariaComponent;
  let fixture: ComponentFixture<PagTerceariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagTerceariaComponent]
    });
    fixture = TestBed.createComponent(PagTerceariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
