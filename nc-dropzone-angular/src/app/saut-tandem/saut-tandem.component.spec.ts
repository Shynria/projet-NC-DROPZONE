import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SautTandemComponent } from './saut-tandem.component';

describe('SautTandemComponent', () => {
  let component: SautTandemComponent;
  let fixture: ComponentFixture<SautTandemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SautTandemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SautTandemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
