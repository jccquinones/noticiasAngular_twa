import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleObjetoComponent } from './detalle-objeto.component';

describe('DetalleObjetoComponent', () => {
  let component: DetalleObjetoComponent;
  let fixture: ComponentFixture<DetalleObjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleObjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleObjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
