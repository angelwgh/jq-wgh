import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdectDescComponent } from './prodect-desc.component';

describe('ProdectDescComponent', () => {
  let component: ProdectDescComponent;
  let fixture: ComponentFixture<ProdectDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdectDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdectDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
