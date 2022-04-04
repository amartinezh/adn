export class PosiblesInfractor {
    id: string;
    placa: string;
    pesoLeido: number;
    pesoPermitido: number;
    fechaLectura: Date;

    constructor(id: string, placa: string, pesoLeido: number, pesoPermitido: number, fechaLectura: Date) {
        this.id = id;
        this.placa = placa;
        this.pesoLeido = pesoLeido;
        this.pesoPermitido = pesoPermitido;
        this.fechaLectura = fechaLectura;
    }
}
