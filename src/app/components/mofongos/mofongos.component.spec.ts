import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MofongosComponent } from './mofongos.component';

describe('MofongosComponent', () => {
  let component: MofongosComponent;
  let fixture: ComponentFixture<MofongosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MofongosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MofongosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
