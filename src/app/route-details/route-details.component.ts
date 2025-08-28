import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_SIMPLE_COMBO_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconComponent, IgxRippleDirective } from '@infragistics/igniteui-angular';
import { Subject, take, takeUntil } from 'rxjs';
import { CustomerDto } from '../models/northwind-apiig/customer-dto';
import { OrderDto } from '../models/northwind-apiig/order-dto';
import { ProductDto } from '../models/northwind-apiig/product-dto';
import { NorthwindAPIIGService } from '../services/northwind-apiig.service';

@Component({
  selector: 'app-route-details',
  imports: [IGX_SIMPLE_COMBO_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IgxAvatarComponent, FormsModule, RouterLink],
  templateUrl: './route-details.component.html',
  styleUrls: ['./route-details.component.scss']
})
export class RouteDetailsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  private _rCustomerID: string = 'ALFKI';
  @Input()
  public get rCustomerID(): string {
    return this._rCustomerID ?? 'ALFKI';
  }
  public set rCustomerID(value: string) {
    this._rCustomerID = value;
    this.selectedCustomer1$.next();
    this.northwindAPIIGOrderDto$.next();
  }

  private _selectedCustomer1?: CustomerDto;
  public get selectedCustomer1(): CustomerDto | undefined {
    return this._selectedCustomer1;
  }
  public set selectedCustomer1(value: CustomerDto | undefined) {
    this._selectedCustomer1 = value;
    this.varOrderID = undefined;
  }
  public selectedCustomer1$: Subject<void> = new Subject<void>();


  private _varOrderID: number = 10692;
  public get varOrderID(): number {
    return this._varOrderID;
  }
  public set varOrderID(value: number) {
    this._varOrderID = value;
    this.northwindAPIIGProductDto$.next();
  }
  public northwindAPIIGOrderDto: OrderDto[] = [];
  public northwindAPIIGOrderDto$: Subject<void> = new Subject<void>();

  public northwindAPIIGProductDto: ProductDto[] = [];
  public northwindAPIIGProductDto$: Subject<void> = new Subject<void>();

  constructor(
    private northwindAPIIGService: NorthwindAPIIGService,
  ) {}


  ngOnInit() {
    this.northwindAPIIGService.getCustomerDto(this.rCustomerID).pipe(takeUntil(this.destroy$)).subscribe(
      data => this.selectedCustomer1 = data
    );
    this.selectedCustomer1$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.northwindAPIIGService.getCustomerDto(this.rCustomerID).pipe(take(1)).subscribe(
        data => this.selectedCustomer1 = data
      );
    });
    this.northwindAPIIGService.getOrderDtoList(this.rCustomerID).pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindAPIIGOrderDto = data
    );
    this.northwindAPIIGOrderDto$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.northwindAPIIGService.getOrderDtoList(this.rCustomerID).pipe(take(1)).subscribe(
        data => this.northwindAPIIGOrderDto = data
      );
    });
    this.northwindAPIIGService.getProductDtoList(this.varOrderID ?? 0).pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindAPIIGProductDto = data
    );
    this.northwindAPIIGProductDto$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.northwindAPIIGService.getProductDtoList(this.varOrderID ?? 0).pipe(take(1)).subscribe(
        data => this.northwindAPIIGProductDto = data
      );
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.selectedCustomer1$.complete();
    this.northwindAPIIGOrderDto$.complete();
    this.northwindAPIIGProductDto$.complete();
  }
}
