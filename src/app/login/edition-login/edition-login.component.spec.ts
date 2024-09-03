import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionLoginComponent } from './edition-login.component';

describe('EditionLoginComponent', () => {
  let component: EditionLoginComponent;
  let fixture: ComponentFixture<EditionLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditionLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
