import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpenPage } from './open.page';

describe('OpenPage', () => {
  let component: OpenPage;
  let fixture: ComponentFixture<OpenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OpenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
