import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesAddComponent } from './sales-add.component';

describe('SalesAddComponent', () => {
  let component: SalesAddComponent;
  let fixture: ComponentFixture<SalesAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesAddComponent]
    });
    fixture = TestBed.createComponent(SalesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
