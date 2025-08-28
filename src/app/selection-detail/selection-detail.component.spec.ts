import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IGX_GRID_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IgxButtonDirective, IgxRippleDirective } from '@infragistics/igniteui-angular';
import { SelectionDetailComponent } from './selection-detail.component';

describe('SelectionDetailComponent', () => {
  let component: SelectionDetailComponent;
  let fixture: ComponentFixture<SelectionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionDetailComponent, NoopAnimationsModule, FormsModule, HttpClientTestingModule, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IGX_GRID_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IgxButtonDirective, IgxRippleDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
