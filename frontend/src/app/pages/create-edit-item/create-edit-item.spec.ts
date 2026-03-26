import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditItem } from './create-edit-item';

describe('CreateEditItem', () => {
  let component: CreateEditItem;
  let fixture: ComponentFixture<CreateEditItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEditItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
