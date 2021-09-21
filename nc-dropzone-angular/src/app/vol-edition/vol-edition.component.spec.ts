import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolEditionComponent } from './vol-edition.component';

describe('VolEditionComponent', () => {
  let component: VolEditionComponent;
  let fixture: ComponentFixture<VolEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
