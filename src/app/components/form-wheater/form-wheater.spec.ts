import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWheater } from './form-wheater';

describe('FormWheater', () => {
  let component: FormWheater;
  let fixture: ComponentFixture<FormWheater>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormWheater]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormWheater);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
