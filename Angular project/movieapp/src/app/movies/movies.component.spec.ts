import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moviescomponent } from './movies.component';

describe('MoviesComponent', () => {
  let component: Moviescomponent;
  let fixture: ComponentFixture<Moviescomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Moviescomponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Moviescomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
