import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_LIST_DIRECTIVES, IgxAvatarComponent } from '@infragistics/igniteui-angular';
import { IgxFinancialChartModule } from 'igniteui-angular-charts';
import { FinancialChartComponent } from './financial-chart.component';

describe('FinancialChartComponent', () => {
  let component: FinancialChartComponent;
  let fixture: ComponentFixture<FinancialChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialChartComponent, NoopAnimationsModule, FormsModule, HttpClientTestingModule, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxFinancialChartModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
