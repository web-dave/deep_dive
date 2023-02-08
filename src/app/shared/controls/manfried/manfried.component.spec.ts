import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManfriedComponent } from './manfried.component';

describe('ManfriedComponent', () => {
  let component: ManfriedComponent;
  let fixture: ComponentFixture<ManfriedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManfriedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManfriedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
