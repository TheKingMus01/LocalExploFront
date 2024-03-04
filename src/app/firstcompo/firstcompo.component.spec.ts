import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstcompoComponent } from './firstcompo.component';

describe('FirstcompoComponent', () => {
  let component: FirstcompoComponent;
  let fixture: ComponentFixture<FirstcompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstcompoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
