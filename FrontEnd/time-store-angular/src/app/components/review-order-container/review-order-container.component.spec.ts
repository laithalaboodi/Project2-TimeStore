import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewOrderContainerComponent } from './review-order-container.component';

describe('ReviewOrderContainerComponent', () => {
  let component: ReviewOrderContainerComponent;
  let fixture: ComponentFixture<ReviewOrderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewOrderContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewOrderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
