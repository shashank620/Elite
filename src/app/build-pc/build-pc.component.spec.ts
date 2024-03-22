import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildPCComponent } from './build-pc.component';

describe('BuildPCComponent', () => {
  let component: BuildPCComponent;
  let fixture: ComponentFixture<BuildPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildPCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuildPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
