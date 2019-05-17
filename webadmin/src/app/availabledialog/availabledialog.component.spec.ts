import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabledialogComponent } from './availabledialog.component';

describe('AvailabledialogComponent', () => {
  let component: AvailabledialogComponent;
  let fixture: ComponentFixture<AvailabledialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailabledialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabledialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
