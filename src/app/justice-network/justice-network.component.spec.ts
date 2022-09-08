import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JusticeNetworkComponent } from './justice-network.component';

describe('JusticeNetworkComponent', () => {
  let component: JusticeNetworkComponent;
  let fixture: ComponentFixture<JusticeNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JusticeNetworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JusticeNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
