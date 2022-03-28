export class PosiblesInfractor {
    id: string;
    placa: string;
    peso_leido: string;
    peso_permitido: string;
    fecha_lectura: Date;

    constructor(id: string, placa: string, peso_leido: string, peso_permitido: string, fecha_lectura: Date) {
        this.id = id;
        this.placa = placa;
        this.peso_leido = peso_leido;
        this.peso_permitido = peso_permitido;
        this.fecha_lectura = fecha_lectura;
    }
}
