import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable } from 'rxjs';
import { CustomerDto } from '../models/northwind-apiig/customer-dto';
import { OrderDetailDto } from '../models/northwind-apiig/order-detail-dto';
import { OrderDto } from '../models/northwind-apiig/order-dto';
import { ProductDto } from '../models/northwind-apiig/product-dto';
import { ErrorHandlerService } from './error-handler.service';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

@Injectable({
  providedIn: 'root'
})
export class NorthwindAPIIGService {
  constructor(
    private http: HttpClient
  ) { }

  public listSelectedItem: BehaviorSubject<CustomerDto | undefined> = new BehaviorSubject<CustomerDto | undefined>(undefined);

  public getCustomerDto(id: string = 'BLONP'): Observable<CustomerDto | undefined> {
    const options = {
      headers: {
        Authorization: 'Bearer <auth_value>',
      },
    };
    return this.http.get<CustomerDto | undefined>(`${API_ENDPOINT}/Customers/${id}`, options)
      .pipe(catchError(ErrorHandlerService.handleError<CustomerDto | undefined>('getCustomerDto', undefined)));
  }

  public getCustomerDtoList(): Observable<CustomerDto[]> {
    const options = {
      headers: {
        Authorization: 'Bearer <auth_value>',
      },
    };
    return this.http.get<CustomerDto[]>(`${API_ENDPOINT}/Customers`, options)
      .pipe(catchError(ErrorHandlerService.handleError<CustomerDto[]>('getCustomerDtoList', [])));
  }

  public putCustomerDto(id: string, data?: CustomerDto): Observable<CustomerDto | undefined> {
    const options = {
      headers: {
        Authorization: 'Bearer <auth_value>',
      },
    };
    const body = data ?? {
      customerId: 'string',
      companyName: 'string',
      contactName: 'string',
      contactTitle: 'string',
      address: {
        street: 'string',
        city: 'string',
        region: 'string',
        postalCode: 'string',
        country: 'string',
        phone: 'string'
      }
    };
    return this.http.put<CustomerDto | undefined>(`${API_ENDPOINT}/Customers/${id}`, body, options)
      .pipe(catchError(ErrorHandlerService.handleError<CustomerDto | undefined>('putCustomerDto', undefined)));
  }

  public postCustomerDto(data?: CustomerDto): Observable<CustomerDto | undefined> {
    const options = {
      headers: {
        Authorization: 'Bearer <auth_value>',
      },
    };
    const body = data ?? {
      customerId: 'string',
      companyName: 'string',
      contactName: 'string',
      contactTitle: 'string',
      address: {
        street: 'string',
        city: 'string',
        region: 'string',
        postalCode: 'string',
        country: 'string',
        phone: 'string'
      }
    };
    return this.http.post<CustomerDto | undefined>(`${API_ENDPOINT}/Customers`, body, options)
      .pipe(catchError(ErrorHandlerService.handleError<CustomerDto | undefined>('postCustomerDto', undefined)));
  }

  public getOrderDtoList(id: string = 'BLONP'): Observable<OrderDto[]> {
    const options = {
      headers: {
        Authorization: 'Bearer <auth_value>',
      },
    };
    return this.http.get<OrderDto[]>(`${API_ENDPOINT}/Customers/${id}/Orders`, options)
      .pipe(catchError(ErrorHandlerService.handleError<OrderDto[]>('getOrderDtoList', [])));
  }

  public getProductDtoList(id: number): Observable<ProductDto[]> {
    const options = {
      headers: {
        Authorization: 'Bearer <auth_value>',
      },
    };
    return this.http.get<ProductDto[]>(`${API_ENDPOINT}/Orders/${id}/Products`, options)
      .pipe(catchError(ErrorHandlerService.handleError<ProductDto[]>('getProductDtoList', [])));
  }

  public getOrderDetailDtoList(id: number): Observable<OrderDetailDto[]> {
    const options = {
      headers: {
        Authorization: 'Bearer <auth_value>',
      },
    };
    return this.http.get<OrderDetailDto[]>(`${API_ENDPOINT}/Orders/${id}/Details`, options)
      .pipe(catchError(ErrorHandlerService.handleError<OrderDetailDto[]>('getOrderDetailDtoList', [])));
  }

  public deleteCustomerDto(id: string): Observable<CustomerDto | undefined> {
    const options = {
      headers: {
        Authorization: 'Bearer <auth_value>',
      },
    };
    return this.http.delete<CustomerDto | undefined>(`${API_ENDPOINT}/Customers/${id}`, options)
      .pipe(catchError(ErrorHandlerService.handleError<CustomerDto | undefined>('deleteCustomerDto', undefined)));
  }
}
