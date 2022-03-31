import { Agente } from './agente';

export class AgenteTestDataBuilder {
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

    setId(id: string) {
        this.id = id;
    }

    build(): Agente {
        return {
            id: this.id,
            nombre: this.nombre,
            telefono: this.telefono,
            horaInicioLabor: this.horaInicioLabor,
            horaFinLabor: this.horaFinLabor,
            isDeleting: this.isDeleting
        };
    }
}
