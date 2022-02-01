import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item';

const BASE_URL = process.env.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpClient: HttpClient) { }

  getUrl(): string {
    return BASE_URL;
  };

  getUrlWithId(id: number): string {
    return `${this.getUrl()}/${id}`;
  };

  getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.getUrl());
  };

  getItem(id: number): Observable<Item> {
    return this.httpClient.get<Item>(this.getUrlWithId(id));
  };

  createItem(item: Item): Observable<Item> {
    return this.httpClient.post<Item>(this.getUrl(), item);
  };

  updateItem(item: Item): Observable<Item> {
    return this.httpClient.patch<Item>(this.getUrlWithId(item.id), item);
  };

  deleteItem(item: Item): Observable<Item> {
    return this.httpClient.delete<Item>(this.getUrlWithId(item.id));
  };
}
