import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductbybusinessPage } from './productbybusiness.page';

describe('ProductbybusinessPage', () => {
  let component: ProductbybusinessPage;
  let fixture: ComponentFixture<ProductbybusinessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductbybusinessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductbybusinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
