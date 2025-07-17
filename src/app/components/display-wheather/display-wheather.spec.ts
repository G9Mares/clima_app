import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWheather } from './display-wheather';

describe('DisplayWheather', () => {
  let component: DisplayWheather;
  let fixture: ComponentFixture<DisplayWheather>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayWheather]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayWheather);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
