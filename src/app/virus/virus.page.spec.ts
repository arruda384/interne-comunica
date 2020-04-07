import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VirusPage } from './virus.page';

describe('VirusPage', () => {
  let component: VirusPage;
  let fixture: ComponentFixture<VirusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VirusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
