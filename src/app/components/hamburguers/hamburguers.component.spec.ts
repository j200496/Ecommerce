import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburguersComponent } from './hamburguers.component';

describe('HamburguersComponent', () => {
  let component: HamburguersComponent;
  let fixture: ComponentFixture<HamburguersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HamburguersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamburguersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
