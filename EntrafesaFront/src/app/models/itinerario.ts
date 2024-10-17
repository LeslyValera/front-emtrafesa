/*export class itinerario {
    id!: number;
    origen!: string;
    destino!: string;
    fechaViaje!: Date;
 
        horaSalida!: string; // formato "HH:mm:ss"
        servicio!: string; // nombre del servicio
asientosLibres: any;
horaLlegada: any;

bus!: {
    id: number;
  };

      }*/

  export interface itinerario {
    id: number;
    origen: string;
    destino: string;
    fechaViaje: Date;
    horaSalida: string;
    horaLlegada: string;
    servicio: string;
    asientosLibres: number;
    bus: { 
        id: number 
    };
  }
  
      