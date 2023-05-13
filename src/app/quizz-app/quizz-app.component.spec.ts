import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzAppComponent } from './quizz-app.component';

describe('QuizzAppComponent', () => {
  let component: QuizzAppComponent;
  let fixture: ComponentFixture<QuizzAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizzAppComponent]
    });
    fixture = TestBed.createComponent(QuizzAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
