import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalComponent } from './historical-component';

describe('HistoricalComponent', () => {
  let component: HistoricalComponent;
  let fixture: ComponentFixture<HistoricalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
