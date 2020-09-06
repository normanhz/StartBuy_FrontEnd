import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditadmininfoPage } from './editadmininfo.page';

describe('EditadmininfoPage', () => {
  let component: EditadmininfoPage;
  let fixture: ComponentFixture<EditadmininfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditadmininfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditadmininfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
