import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalheVirusPage } from './detalhe-virus.page';

describe('DetalheVirusPage', () => {
  let component: DetalheVirusPage;
  let fixture: ComponentFixture<DetalheVirusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheVirusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalheVirusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
