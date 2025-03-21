import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgHandlerComponent } from './img-handler.component';

describe('ImgHandlerComponent', () => {
  let component: ImgHandlerComponent;
  let fixture: ComponentFixture<ImgHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgHandlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
