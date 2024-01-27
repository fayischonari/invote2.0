import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterAddComponent } from './voter-add.component';

describe('VoterAddComponent', () => {
  let component: VoterAddComponent;
  let fixture: ComponentFixture<VoterAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterAddComponent]
    });
    fixture = TestBed.createComponent(VoterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
