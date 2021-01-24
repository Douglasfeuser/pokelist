import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationListPageComponent } from './generation-list-page.component';

describe('GenerationListPageComponent', () => {
  let component: GenerationListPageComponent;
  let fixture: ComponentFixture<GenerationListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerationListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerationListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
