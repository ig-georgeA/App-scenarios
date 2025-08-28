import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_TABS_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxRippleDirective, IgxSnackbarComponent } from '@infragistics/igniteui-angular';
import { firstValueFrom, Subject, takeUntil } from 'rxjs';
import { CustomerDto } from '../models/northwind-apiig/customer-dto';
import { CustomerDtoForm } from '../models/northwind-apiig/customer-dto-forms';
import { NorthwindAPIIGService } from '../services/northwind-apiig.service';

@Component({
  selector: 'app-forms-grid',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_TABS_DIRECTIVES, IgxIconComponent, IgxButtonDirective, IgxRippleDirective, IgxSnackbarComponent, ReactiveFormsModule],
  templateUrl: './forms-grid.component.html',
  styleUrls: ['./forms-grid.component.scss']
})
export class FormsGridComponent implements OnInit, OnDestroy {
  @ViewChild('snackbarsuccess', { static: true, read: IgxSnackbarComponent})
  private snackbarsuccess?: IgxSnackbarComponent;

  @ViewChild('snackbarerror', { static: true, read: IgxSnackbarComponent})
  private snackbarerror?: IgxSnackbarComponent;

  @ViewChild('snackbarsuccess1', { static: true, read: IgxSnackbarComponent})
  private snackbarsuccess1?: IgxSnackbarComponent;

  @ViewChild('snackbarerror1', { static: true, read: IgxSnackbarComponent})
  private snackbarerror1?: IgxSnackbarComponent;

  private destroy$: Subject<void> = new Subject<void>();

  private _selectedCustomer?: CustomerDto;
  public get selectedCustomer(): CustomerDto | undefined {
    return this._selectedCustomer;
  }
  public set selectedCustomer(value: CustomerDto | undefined) {
    this._selectedCustomer = value;
    this.customerDtoFormModel.reset(value);
  }
  public customerDtoFormModel: FormGroup<CustomerDtoForm>;
  public customerDtoFormModel1: FormGroup<CustomerDtoForm>;
  public northwindAPIIGCustomerDto: CustomerDto[] = [];

  constructor(
    private northwindAPIIGService: NorthwindAPIIGService,
  ) {
    this.customerDtoFormModel = this.createCustomerDtoFormGroup();
    this.customerDtoFormModel1 = this.createCustomerDtoFormGroup1();
  }


  ngOnInit() {
    this.northwindAPIIGService.getCustomerDto('ALFKI').pipe(takeUntil(this.destroy$)).subscribe(
      data => this.selectedCustomer = data
    );
    this.northwindAPIIGService.getCustomerDtoList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindAPIIGCustomerDto = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public async ngSubmitCustomerDto(): Promise<void> {
    if (this.customerDtoFormModel.invalid) {
      this.customerDtoFormModel.markAllAsTouched();
      return;
    }
    const data = await firstValueFrom(this.northwindAPIIGService.putCustomerDto(this.selectedCustomer?.customerId, this.customerDtoFormModel.value as CustomerDto));
    if (data) {
      this.snackbarsuccess?.toggle();
    } else {
      this.snackbarerror?.toggle();
    }
  }

  private createCustomerDtoFormGroup() {
    return new FormGroup({
      customerId: new FormControl<string | undefined | null>({ value: null, disabled: true }),
      companyName: new FormControl<string | null>(null, [Validators.required, Validators.minLength(0), Validators.maxLength(100)]),
      contactName: new FormControl<string | undefined | null>(null, [Validators.minLength(0), Validators.maxLength(50)]),
      contactTitle: new FormControl<string | undefined | null>(null, [Validators.minLength(0), Validators.maxLength(50)]),
      address: new FormGroup({
        street: new FormControl<string | undefined | null>(null, [Validators.minLength(0), Validators.maxLength(100)]),
        city: new FormControl<string | undefined | null>(null, [Validators.minLength(0), Validators.maxLength(50)]),
        region: new FormControl<string | undefined | null>(null, [Validators.minLength(0), Validators.maxLength(50)]),
        postalCode: new FormControl<string | undefined | null>(null, [Validators.minLength(0), Validators.maxLength(20)]),
        country: new FormControl<string | undefined | null>(null, [Validators.required, Validators.minLength(0), Validators.maxLength(50)]),
        phone: new FormControl<string | undefined | null>(null, Validators.pattern('^\\+?[0-9][0-9\\-]{1,14}$')),
      }),
    });
  }

  public resetCustomerDto(e: Event): void {
    e.preventDefault();
    this.customerDtoFormModel.reset(this.selectedCustomer);
  }

  public async ngSubmitCustomerDto1(): Promise<void> {
    if (this.customerDtoFormModel1.invalid) {
      this.customerDtoFormModel1.markAllAsTouched();
      return;
    }
    const data = await firstValueFrom(this.northwindAPIIGService.postCustomerDto(this.customerDtoFormModel1.value as CustomerDto));
    if (data) {
      this.snackbarsuccess1?.toggle();
    } else {
      this.snackbarerror1?.toggle();
    }
  }

  private createCustomerDtoFormGroup1() {
    return new FormGroup({
      customerId: new FormControl<string | undefined | null>(null),
      companyName: new FormControl<string | null>(null, [Validators.required, Validators.minLength(0), Validators.maxLength(100)]),
      contactName: new FormControl<string | undefined | null>(null, [Validators.minLength(0), Validators.maxLength(50)]),
      contactTitle: new FormControl<string | undefined | null>(null, [Validators.minLength(0), Validators.maxLength(50)]),
      address: new FormGroup({
        street: new FormControl<string | undefined | null>(null, [Validators.minLength(0), Validators.maxLength(100)]),
        city: new FormControl<string | undefined | null>(null, [Validators.minLength(0), Validators.maxLength(50)]),
        region: new FormControl<string | undefined | null>(null, [Validators.minLength(0), Validators.maxLength(50)]),
        postalCode: new FormControl<string | undefined | null>(null, [Validators.minLength(0), Validators.maxLength(20)]),
        country: new FormControl<string | undefined | null>(null, [Validators.required, Validators.minLength(0), Validators.maxLength(50)]),
        phone: new FormControl<string | undefined | null>(null, Validators.pattern('^\\+?[0-9][0-9\\-]{1,14}$')),
      }),
    });
  }

  public resetCustomerDto1(e: Event): void {
    e.preventDefault();
    this.customerDtoFormModel1.reset();
  }
}
