import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisternoticesPage } from './registernotices.page';

describe('RegisternoticesPage', () => {
  let component: RegisternoticesPage;
  let fixture: ComponentFixture<RegisternoticesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisternoticesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisternoticesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
