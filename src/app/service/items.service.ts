import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    return `${this.getUrl()}/${id}`
  }
}
