import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusMapDTO } from '../models/bus-map';

@Injectable({
  providedIn: 'root'
})
export class AsientoService {
  private apiUrl = 'http://localhost:8080/api/asientos';

  constructor(private http: HttpClient) {}

  obtenerMapaAsientos(busId: number): Observable<BusMapDTO> {
    return this.http.get<BusMapDTO>(`${this.apiUrl}/bus/${busId}/mapa`);
  }
}
