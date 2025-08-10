import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeTable } from './poke-table';

describe('PokeTable', () => {
  let component: PokeTable;
  let fixture: ComponentFixture<PokeTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
