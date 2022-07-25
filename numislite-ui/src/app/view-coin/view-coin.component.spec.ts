import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCoinComponent } from './view-coin.component';

describe('ViewCoinComponent', () => {
  let component: ViewCoinComponent;
  let fixture: ComponentFixture<ViewCoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
