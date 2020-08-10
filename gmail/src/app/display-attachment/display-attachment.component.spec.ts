import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAttachmentComponent } from './display-attachment.component';

describe('DisplayAttachmentComponent', () => {
  let component: DisplayAttachmentComponent;
  let fixture: ComponentFixture<DisplayAttachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAttachmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
