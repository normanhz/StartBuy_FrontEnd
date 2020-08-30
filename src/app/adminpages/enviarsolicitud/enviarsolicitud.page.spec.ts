import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnviarsolicitudPage } from './enviarsolicitud.page';

describe('EnviarsolicitudPage', () => {
  let component: EnviarsolicitudPage;
  let fixture: ComponentFixture<EnviarsolicitudPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarsolicitudPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnviarsolicitudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
