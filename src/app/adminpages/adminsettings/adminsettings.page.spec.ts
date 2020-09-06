import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminsettingsPage } from './adminsettings.page';

describe('AdminsettingsPage', () => {
  let component: AdminsettingsPage;
  let fixture: ComponentFixture<AdminsettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminsettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
