import { AsientoDTO } from './asiento';

export interface BusMapDTO {
  busId: number;
  placa: string;
  asientos: AsientoDTO[];
}
