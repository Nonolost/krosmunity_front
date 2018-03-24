import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TournamentListsComponent} from './tournament-lists.component';

describe('TournamentListsComponent', () => {
  let component: TournamentListsComponent;
  let fixture: ComponentFixture<TournamentListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TournamentListsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
