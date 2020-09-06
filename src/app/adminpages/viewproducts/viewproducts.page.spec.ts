import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewproductsPage } from './viewproducts.page';

describe('ViewproductsPage', () => {
  let component: ViewproductsPage;
  let fixture: ComponentFixture<ViewproductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewproductsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewproductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
