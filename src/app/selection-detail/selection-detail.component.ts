import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconComponent, IgxRippleDirective } from '@infragistics/igniteui-angular';
import { Subject, take, takeUntil } from 'rxjs';
import { CustomerDto } from '../models/northwind-apiig/customer-dto';
import { OrderDetailDto } from '../models/northwind-apiig/order-detail-dto';
import { OrderDto } from '../models/northwind-apiig/order-dto';
import { NorthwindAPIIGService } from '../services/northwind-apiig.service';

@Component({
  selector: 'app-selection-detail',
  imports: [IGX_DIALOG_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IgxButtonDirective, IgxRippleDirective],
  templateUrl: './selection-detail.component.html',
  styleUrls: ['./selection-detail.component.scss']
})
export class SelectionDetailComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  private _varCustomer?: CustomerDto;
  public get varCustomer(): CustomerDto | undefined {
    return this._varCustomer;
  }
  public set varCustomer(value: CustomerDto | undefined) {
    this._varCustomer = value;
    this.northwindAPIIGOrderDto$.next();
  }

  private _varOrderID1: number = 10248;
  public get varOrderID1(): number {
    return this._varOrderID1;
  }
  public set varOrderID1(value: number) {
    this._varOrderID1 = value;
    this.northwindAPIIGOrderDetailDto$.next();
  }
  public northwindAPIIGCustomerDto: CustomerDto[] = [];
  public northwindAPIIGOrderDto: OrderDto[] = [];
  public northwindAPIIGOrderDto$: Subject<void> = new Subject<void>();

  public northwindAPIIGOrderDetailDto: OrderDetailDto[] = [];
  public northwindAPIIGOrderDetailDto$: Subject<void> = new Subject<void>();

  constructor(
    protected northwindAPIIGService: NorthwindAPIIGService,
  ) {}


  ngOnInit() {
    this.northwindAPIIGService.getCustomerDto('ALFKI').pipe(takeUntil(this.destroy$)).subscribe(
      data => this.varCustomer = data
    );
    this.northwindAPIIGService.getCustomerDtoList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindAPIIGCustomerDto = data
    );
    this.northwindAPIIGService.getOrderDtoList(this.varCustomer?.customerId).pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindAPIIGOrderDto = data
    );
    this.northwindAPIIGOrderDto$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.northwindAPIIGService.getOrderDtoList(this.varCustomer?.customerId).pipe(take(1)).subscribe(
        data => this.northwindAPIIGOrderDto = data
      );
    });
    this.northwindAPIIGService.getOrderDetailDtoList(this.varOrderID1 ?? 0).pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindAPIIGOrderDetailDto = data
    );
    this.northwindAPIIGOrderDetailDto$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.northwindAPIIGService.getOrderDetailDtoList(this.varOrderID1 ?? 0).pipe(take(1)).subscribe(
        data => this.northwindAPIIGOrderDetailDto = data
      );
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.northwindAPIIGOrderDto$.complete();
    this.northwindAPIIGOrderDetailDto$.complete();
  }

  public clickListItem(item: CustomerDto): void {
    this.varCustomer = item;
    this.northwindAPIIGService.listSelectedItem.next(item);
  }
}
