import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarObjetoComponent } from './agregar-objeto.component';

describe('AgregarObjetoComponent', () => {
  let component: AgregarObjetoComponent;
  let fixture: ComponentFixture<AgregarObjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarObjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarObjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
