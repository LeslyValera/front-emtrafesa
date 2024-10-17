import { Component, Input, OnInit } from '@angular/core';
import { AsientoService } from '../../services/asiento.service';
import { AsientoDTO } from '../../models/asiento';

@Component({
  selector: 'app-asiento',
  templateUrl: './asiento.component.html',
  styleUrls: ['./asiento.component.scss']
})
export class AsientoComponent implements OnInit {
  @Input() busId!: number;
  asientos: AsientoDTO[] = [];

  constructor(private asientoService: AsientoService) {}

  ngOnInit(): void {
    if (this.busId) {
      this.cargarAsientos(this.busId);
    }
  }

  cargarAsientos(busId: number): void {
    this.asientoService.obtenerMapaAsientos(busId).subscribe(
      (data) => this.asientos = data.asientos,
      (error) => console.error('Error al cargar asientos:', error)
    );
  }
}



