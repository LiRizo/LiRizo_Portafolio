import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projectsv1Component } from './projectsv1.component';

describe('Projectsv1Component', () => {
  let component: Projectsv1Component;
  let fixture: ComponentFixture<Projectsv1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Projectsv1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Projectsv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
