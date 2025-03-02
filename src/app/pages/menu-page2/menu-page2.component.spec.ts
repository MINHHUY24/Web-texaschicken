import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPage2Component } from './menu-page2.component';

describe('MenuPage2Component', () => {
  let component: MenuPage2Component;
  let fixture: ComponentFixture<MenuPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPage2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
