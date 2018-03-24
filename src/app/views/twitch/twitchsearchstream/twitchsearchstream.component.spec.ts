import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TwitchsearchstreamComponent} from './twitchsearchstream.component';

describe('TwitchsearchstreamComponent', () => {
  let component: TwitchsearchstreamComponent;
  let fixture: ComponentFixture<TwitchsearchstreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TwitchsearchstreamComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitchsearchstreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
