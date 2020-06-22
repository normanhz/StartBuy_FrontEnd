import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EdituserinfoPage } from './edituserinfo.page';

describe('EdituserinfoPage', () => {
  let component: EdituserinfoPage;
  let fixture: ComponentFixture<EdituserinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdituserinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EdituserinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
