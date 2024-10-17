/*import { Component, OnInit } from '@angular/core';
import { EntrafesaService } from '../../services/itinerario.service';
import { itinerario } from '../../models/itinerario';

@Component({
  selector: 'app-itinerario',
  templateUrl: './itinerario.component.html',
  styleUrls: ['./itinerario.component.scss']
})
export class ItinerarioComponent implements OnInit {
  itinerarios: itinerario[] = []; // Array para guardar los resultados
  origen: string[] = [];          // Lista de orígenes
  destino: string[] = [];         // Lista de destinos
  fechaViajeISO: string = '';     // Formato ISO para la fecha seleccionada

  origenSeleccionado: string = '';  // Para almacenar el origen seleccionado
  destinoSeleccionado: string = ''; // Para almacenar el destino seleccionado
  currentStep: number = 1;         // Control de pasos
  itinerarioElegido: itinerario | null = null; // Almacena el itinerario elegido

  constructor(private entrafesaService: EntrafesaService) {} // Inyecta el servicio

  ngOnInit(): void {
    this.obtenerOrigen();
    this.obtenerDestino();
  }

  obtenerOrigen(): void {
    this.entrafesaService.getOrigen().subscribe(
      (data) => this.origen = data,
      (error) => console.error('Error al obtener orígenes: ', error)
    );
  }

  obtenerDestino(): void {
    this.entrafesaService.getDestino().subscribe(
      (data) => this.destino = data,
      (error) => console.error('Error al obtener destinos: ', error)
    );
  }

  buscarItinerarios(): void {
    // Formatear la fecha a formato YYYY-MM-DD
    const fechaFormateada = new Date(this.fechaViajeISO).toISOString().split('T')[0];
    console.log('Fecha formateada:', fechaFormateada);

    this.entrafesaService.buscarItinerario(this.origenSeleccionado, this.destinoSeleccionado, fechaFormateada)
      .subscribe(
        (data) => {
          this.itinerarios = data;
          console.log('Itinerarios encontrados:', this.itinerarios);
          if (this.itinerarios.length > 0) {
            this.irAdelante(); // Avanzamos al siguiente paso si hay resultados
          }
        },
        (error) => console.error('Error al buscar itinerarios: ', error)
      );
  }

  irAdelante(): void {
    this.currentStep++; // Avanza al siguiente paso
  }

  elegirItinerario(itinerario: itinerario): void {
    this.itinerarioElegido = itinerario;
    // Aquí podrías avanzar al siguiente paso o mostrar un mensaje
    console.log('Itinerario elegido:', itinerario);
  }*/

    import { Component, OnInit } from '@angular/core';
    import { EntrafesaService } from '../../services/itinerario.service';
    import { itinerario } from '../../models/itinerario';
    
    @Component({
      selector: 'app-itinerario',
      templateUrl: './itinerario.component.html',
      styleUrls: ['./itinerario.component.scss']
    })
    export class ItinerarioComponent implements OnInit {
      itinerarios: itinerario[] = [];
      origen: string[] = [];
      destino: string[] = [];
      fechaViajeISO: string = '';
    
      origenSeleccionado: string = '';
      destinoSeleccionado: string = '';
      currentStep: number = 1;
      itinerarioElegido: itinerario | null = null;
    
      constructor(private entrafesaService: EntrafesaService) {}
    
      ngOnInit(): void {
        this.loadOriginsAndDestinations();
      }
    
      private loadOriginsAndDestinations(): void {
        this.entrafesaService.getOrigen().subscribe(data => this.origen = data);
        this.entrafesaService.getDestino().subscribe(data => this.destino = data);
      }
    
      buscarItinerarios(): void {
        const formattedDate = new Date(this.fechaViajeISO).toISOString().split('T')[0];
        this.entrafesaService.buscarItinerario(this.origenSeleccionado, this.destinoSeleccionado, formattedDate).subscribe(data => {
          this.itinerarios = data;
          if (data.length > 0) this.nextStep();
        });
      }
    
      nextStep(): void {
        this.currentStep++;
      }
    
      elegirItinerario(itinerario: itinerario): void {
        this.itinerarioElegido = itinerario;
      }
    }
    
  
