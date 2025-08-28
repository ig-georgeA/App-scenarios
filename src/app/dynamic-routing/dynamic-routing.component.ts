import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IGX_GRID_DIRECTIVES } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { CustomerDto } from '../models/northwind-apiig/customer-dto';
import { NorthwindAPIIGService } from '../services/northwind-apiig.service';

@Component({
  selector: 'app-dynamic-routing',
  imports: [IGX_GRID_DIRECTIVES, RouterLink],
  templateUrl: './dynamic-routing.component.html',
  styleUrls: ['./dynamic-routing.component.scss']
})
export class DynamicRoutingComponent implements OnInit, OnDestroy {
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
}
