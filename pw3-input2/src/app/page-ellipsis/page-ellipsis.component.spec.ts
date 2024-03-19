import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEllipsisComponent } from './page-ellipsis.component';

describe('PageEllipsisComponent', () => {
  let component: PageEllipsisComponent;
  let fixture: ComponentFixture<PageEllipsisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageEllipsisComponent]
    });
    fixture = TestBed.createComponent(PageEllipsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
