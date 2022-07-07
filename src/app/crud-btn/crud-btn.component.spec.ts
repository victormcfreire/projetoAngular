import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudBtnComponent } from './crud-btn.component';

describe('CrudBtnComponent', () => {
  let component: CrudBtnComponent;
  let fixture: ComponentFixture<CrudBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
