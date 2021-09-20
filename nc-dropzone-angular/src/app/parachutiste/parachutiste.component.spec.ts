import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParachutisteComponent } from './parachutiste.component';

describe('ParachutisteComponent', () => {
  let component: ParachutisteComponent;
  let fixture: ComponentFixture<ParachutisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParachutisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParachutisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
