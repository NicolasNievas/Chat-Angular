import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjUserComponent } from './msj-user.component';

describe('MsjUserComponent', () => {
  let component: MsjUserComponent;
  let fixture: ComponentFixture<MsjUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MsjUserComponent]
    });
    fixture = TestBed.createComponent(MsjUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
