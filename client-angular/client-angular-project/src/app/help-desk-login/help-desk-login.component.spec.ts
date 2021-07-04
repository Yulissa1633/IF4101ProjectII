import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDeskloginComponent } from './help-desk-login.component';

describe('HelpDeskloginComponent', () => {
  let component: HelpDeskloginComponent;
  let fixture: ComponentFixture<HelpDeskloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpDeskloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpDeskloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
