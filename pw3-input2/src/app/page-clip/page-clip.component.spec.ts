import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClipComponent } from './page-clip.component';

describe('PageClipComponent', () => {
  let component: PageClipComponent;
  let fixture: ComponentFixture<PageClipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageClipComponent]
    });
    fixture = TestBed.createComponent(PageClipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
