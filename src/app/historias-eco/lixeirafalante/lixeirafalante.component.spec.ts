import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LixeirafalanteComponent } from './lixeirafalante.component';

describe('LixeirafalanteComponent', () => {
  let component: LixeirafalanteComponent;
  let fixture: ComponentFixture<LixeirafalanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LixeirafalanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LixeirafalanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
