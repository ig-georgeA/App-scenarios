import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGridEditDoneEventArgs, IGX_GRID_ACTION_STRIP_DIRECTIVES, IGX_GRID_DIRECTIVES, IRowDataEventArgs } from 'igniteui-angular';
import { firstValueFrom, Subject, takeUntil } from 'rxjs';
import { CustomerDto } from '../models/northwind-apiig/customer-dto';
import { NorthwindAPIIGService } from '../services/northwind-apiig.service';

@Component({
  selector: 'app-grid-crud',
  imports: [IGX_GRID_ACTION_STRIP_DIRECTIVES, IGX_GRID_DIRECTIVES],
  templateUrl: './grid-crud.component.html',
  styleUrls: ['./grid-crud.component.scss']
})
export class GridCRUDComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public northwindAPIIGCustomerDto: CustomerDto[] = [];

  constructor(
    private northwindAPIIGService: NorthwindAPIIGService,
  ) {}


  ngOnInit() {
    this.northwindAPIIGService.getCustomerDtoList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindAPIIGCustomerDto = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public async rowAddedGridPlus(e: IRowDataEventArgs): Promise<void> {
    await firstValueFrom(this.northwindAPIIGService.postCustomerDto(e.rowData as CustomerDto));
  }

  public async rowDeletedGridPlus(e: IRowDataEventArgs): Promise<void> {
    await firstValueFrom(this.northwindAPIIGService.deleteCustomerDto((e.rowData as CustomerDto)?.customerId ?? ''));
  }

  public async rowEditDoneGridPlus(e: IGridEditDoneEventArgs): Promise<void> {
    if(e.isAddRow == false) {
    }
  }
}
