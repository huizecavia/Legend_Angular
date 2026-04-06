import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hikelist } from './hikelist';

describe('Hikelist', () => {
  let component: Hikelist;
  let fixture: ComponentFixture<Hikelist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hikelist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hikelist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
