import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdeaManagerDashboard } from './idea-manager-dashboard';

describe('IdeaManagerDashboard', () => {
  let component: IdeaManagerDashboard;
  let fixture: ComponentFixture<IdeaManagerDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdeaManagerDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(IdeaManagerDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
