import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuViewDetailComponent } from './menu-view-detail.component';

describe('MenuViewDetailComponent', () => {
  let component: MenuViewDetailComponent;
  let fixture: ComponentFixture<MenuViewDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuViewDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuViewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
