import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByDistComponent } from './find-by-dist.component';

describe('FindByDistComponent', () => {
  let component: FindByDistComponent;
  let fixture: ComponentFixture<FindByDistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindByDistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindByDistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
