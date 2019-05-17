import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatdriveComponent } from './chatdrive.component';

describe('ChatdriveComponent', () => {
  let component: ChatdriveComponent;
  let fixture: ComponentFixture<ChatdriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatdriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatdriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
