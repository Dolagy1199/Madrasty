import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksappreciationComponent } from './thanksappreciation.component';

describe('ThanksappreciationComponent', () => {
  let component: ThanksappreciationComponent;
  let fixture: ComponentFixture<ThanksappreciationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanksappreciationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThanksappreciationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
