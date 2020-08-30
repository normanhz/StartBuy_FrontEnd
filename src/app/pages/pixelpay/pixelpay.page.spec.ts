import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PixelpayPage } from './pixelpay.page';

describe('PixelpayPage', () => {
  let component: PixelpayPage;
  let fixture: ComponentFixture<PixelpayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixelpayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PixelpayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
