import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileManagerAppComponent } from './file-manager-app.component';

describe('FileManagerAppComponent', () => {
  let component: FileManagerAppComponent;
  let fixture: ComponentFixture<FileManagerAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileManagerAppComponent]
    });
    fixture = TestBed.createComponent(FileManagerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
