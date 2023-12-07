import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputClearable } from './input-clearable.component';

describe('InputClearable', () => {
  let component: InputClearable;
  let fixture: ComponentFixture<InputClearable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputClearable]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputClearable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
