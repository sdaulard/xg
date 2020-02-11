import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcedComponent } from './testced.component';

describe('TestcedComponent', () => {
  let component: TestcedComponent;
  let fixture: ComponentFixture<TestcedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
