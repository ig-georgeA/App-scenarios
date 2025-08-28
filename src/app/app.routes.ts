import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { FormsGridComponent } from './forms-grid/forms-grid.component';
import { DynamicRoutingComponent } from './dynamic-routing/dynamic-routing.component';
import { RouteDetailsComponent } from './route-details/route-details.component';
import { SelectionDetailComponent } from './selection-detail/selection-detail.component';
import { GridCRUDComponent } from './grid-crud/grid-crud.component';
import { FinancialChartComponent } from './financial-chart/financial-chart.component';

export const routes: Routes = [
  { path: '', redirectTo: 'forms-grid', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'forms-+-grid', component: FormsGridComponent, data: { text: 'Forms-Grid' } },
  { path: 'dynamic-routing', component: DynamicRoutingComponent, data: { text: 'Dynamic-Routing' } },
  { path: 'route-details/:rCustomerID', component: RouteDetailsComponent, data: { text: 'Route-Details' } },
  { path: 'selection-detail', component: SelectionDetailComponent, data: { text: 'Selection-Detail' } },
  { path: 'grid-crud', component: GridCRUDComponent, data: { text: 'Grid-Crud' } },
  { path: 'financial-chart', component: FinancialChartComponent, data: { text: 'Financial-Chart' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
