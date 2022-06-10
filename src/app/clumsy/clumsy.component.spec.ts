import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClumsyComponent } from './clumsy.component';

describe('ClumsyComponent', () => {
  let component: ClumsyComponent;
  let fixture: ComponentFixture<ClumsyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClumsyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClumsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
