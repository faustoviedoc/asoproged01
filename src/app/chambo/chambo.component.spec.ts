import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamboComponent } from './chambo.component';

describe('ChamboComponent', () => {
  let component: ChamboComponent;
  let fixture: ComponentFixture<ChamboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
