import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  
  private apiUrl = `${environment.apiUrl}/items`;
  // petición http, comunicación con FastAPI
  constructor(private http: HttpClient) { }
  
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
    // array de items
  }
}
