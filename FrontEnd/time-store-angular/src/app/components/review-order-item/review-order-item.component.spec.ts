import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewOrderItemComponent } from './review-order-item.component';

describe('ReviewOrderItemComponent', () => {
  let component: ReviewOrderItemComponent;
  let fixture: ComponentFixture<ReviewOrderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewOrderItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewOrderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
