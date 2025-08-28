import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_SIMPLE_COMBO_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IgxAvatarComponent, IGX_GRID_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_LIST_DIRECTIVES } from '@infragistics/igniteui-angular';
import { RouteDetailsComponent } from './route-details.component';

describe('RouteDetailsComponent', () => {
  let component: RouteDetailsComponent;
  let fixture: ComponentFixture<RouteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteDetailsComponent, NoopAnimationsModule, FormsModule, RouterTestingModule, HttpClientTestingModule, IGX_SIMPLE_COMBO_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IgxAvatarComponent, IGX_GRID_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_LIST_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
