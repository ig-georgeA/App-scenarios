import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Stock } from '../models/fin-tech-api/stock';
import { StockData } from '../models/fin-tech-api/stock-data';
import { ErrorHandlerService } from './error-handler.service';

const API_ENDPOINT = 'https://fintechcloud.azurewebsites.net';

@Injectable({
  providedIn: 'root'
})
export class FinTechAPIService {
  constructor(
    private http: HttpClient
  ) { }

  public getStock(symbol: string = 'PLCE'): Observable<Stock | undefined> {
    return this.http.get<Stock | undefined>(`${API_ENDPOINT}/stocks/${symbol}`)
      .pipe(catchError(ErrorHandlerService.handleError<Stock | undefined>('getStock', undefined)));
  }

  public getStockList(): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${API_ENDPOINT}/stocks`)
      .pipe(catchError(ErrorHandlerService.handleError<Stock[]>('getStockList', [])));
  }

  public getStockDataList(symbol: string = 'UNH'): Observable<StockData[]> {
    return this.http.get<StockData[]>(`${API_ENDPOINT}/stockprices/${symbol}`)
      .pipe(catchError(ErrorHandlerService.handleError<StockData[]>('getStockDataList', [])));
  }
}
