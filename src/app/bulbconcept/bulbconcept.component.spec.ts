import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulbconceptComponent } from './bulbconcept.component';

describe('BulbconceptComponent', () => {
  let component: BulbconceptComponent;
  let fixture: ComponentFixture<BulbconceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulbconceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulbconceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
