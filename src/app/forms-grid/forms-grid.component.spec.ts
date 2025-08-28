import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_GRID_DIRECTIVES, IGX_TABS_DIRECTIVES, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxSnackbarComponent } from '@infragistics/igniteui-angular';
import { FormsGridComponent } from './forms-grid.component';

describe('FormsGridComponent', () => {
  let component: FormsGridComponent;
  let fixture: ComponentFixture<FormsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsGridComponent, NoopAnimationsModule, FormsModule, HttpClientTestingModule, IGX_GRID_DIRECTIVES, IGX_TABS_DIRECTIVES, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxSnackbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
