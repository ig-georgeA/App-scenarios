import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_GRID_DIRECTIVES } from '@infragistics/igniteui-angular';
import { DynamicRoutingComponent } from './dynamic-routing.component';

describe('DynamicRoutingComponent', () => {
  let component: DynamicRoutingComponent;
  let fixture: ComponentFixture<DynamicRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicRoutingComponent, NoopAnimationsModule, FormsModule, RouterTestingModule, HttpClientTestingModule, IGX_GRID_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
