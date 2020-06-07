import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BusinessbycategoryPage } from './businessbycategory.page';

describe('BusinessbycategoryPage', () => {
  let component: BusinessbycategoryPage;
  let fixture: ComponentFixture<BusinessbycategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessbycategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessbycategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
