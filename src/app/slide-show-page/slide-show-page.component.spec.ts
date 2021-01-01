import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideShowPageComponent } from './slide-show-page.component';

describe('SlideShowPageComponent', () => {
  let component: SlideShowPageComponent;
  let fixture: ComponentFixture<SlideShowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideShowPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideShowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
