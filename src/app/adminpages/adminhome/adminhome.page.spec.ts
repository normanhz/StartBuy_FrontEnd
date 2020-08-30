import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminhomePage } from './adminhome.page';

describe('AdminhomePage', () => {
  let component: AdminhomePage;
  let fixture: ComponentFixture<AdminhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminhomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
