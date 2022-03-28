export class Agente {
    id: string;
    nombre: string;
    telefono: string;
    hora_inicio_labor: number;
    hora_fin_labor: number;
    isDeleting = false;

    constructor(id: string, nombre: string, telefono: string, hora_inicio_labor: number, hora_fin_labor: number) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.hora_inicio_labor = hora_inicio_labor;
        this.hora_fin_labor = hora_fin_labor;
        this.isDeleting = false;
    }
}