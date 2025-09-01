import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YaroasComponent } from './yaroas.component';

describe('YaroasComponent', () => {
  let component: YaroasComponent;
  let fixture: ComponentFixture<YaroasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YaroasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YaroasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
