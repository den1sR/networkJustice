import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkMetricesComponent } from './network-metrices.component';

describe('NetworkMetricesComponent', () => {
  let component: NetworkMetricesComponent;
  let fixture: ComponentFixture<NetworkMetricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkMetricesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworkMetricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
