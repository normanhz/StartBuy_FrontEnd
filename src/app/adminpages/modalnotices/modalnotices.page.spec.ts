import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalnoticesPage } from './modalnotices.page';

describe('ModalnoticesPage', () => {
  let component: ModalnoticesPage;
  let fixture: ComponentFixture<ModalnoticesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalnoticesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalnoticesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
