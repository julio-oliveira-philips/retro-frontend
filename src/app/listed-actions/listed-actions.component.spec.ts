import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedActionsComponent } from './listed-actions.component';

describe('ListedActionsComponent', () => {
  let component: ListedActionsComponent;
  let fixture: ComponentFixture<ListedActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListedActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListedActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
