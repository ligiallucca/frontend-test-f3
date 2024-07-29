import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionsCardComponent } from './contributions-card.component';

describe('ContributionsCardComponent', () => {
  let component: ContributionsCardComponent;
  let fixture: ComponentFixture<ContributionsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContributionsCardComponent]
    });
    fixture = TestBed.createComponent(ContributionsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
