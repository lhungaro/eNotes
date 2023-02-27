import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarFinancasComponent } from './gerenciar-financas.component';

describe('GerenciarFinancasComponent', () => {
  let component: GerenciarFinancasComponent;
  let fixture: ComponentFixture<GerenciarFinancasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarFinancasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarFinancasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
