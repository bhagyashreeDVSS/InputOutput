import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewformComponent } from './previewform.component';

describe('PreviewformComponent', () => {
  let component: PreviewformComponent;
  let fixture: ComponentFixture<PreviewformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewformComponent]
    });
    fixture = TestBed.createComponent(PreviewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
