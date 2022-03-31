export class Agente {
    id: string;
    nombre: string;
    telefono: string;
    horaInicioLabor: number;
    horaFinLabor: number;
    isDeleting = false;

    constructor(id: string, nombre: string, telefono: string, horaInicioLabor: number, horaFinLabor: number) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.horaInicioLabor = horaInicioLabor;
        this.horaFinLabor = horaFinLabor;
        this.isDeleting = false;
    }
}
