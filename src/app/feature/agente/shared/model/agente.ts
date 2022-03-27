export class Agente {
    id: string;
    nombre: string;
    telefono: string;
    isDeleting = false;

    constructor(id: string, nombre: string, telefono: string) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.isDeleting = false;
    }
}
