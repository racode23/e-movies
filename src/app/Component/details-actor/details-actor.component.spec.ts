import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsActorComponent } from './details-actor.component';

describe('DetailsActorComponent', () => {
  let component: DetailsActorComponent;
  let fixture: ComponentFixture<DetailsActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsActorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
