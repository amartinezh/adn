export class PosiblesInfractor {
    id: string;
    placa: string;
    pesoLeido: string;
    pesoPermitido: string;
    fechaLectura: Date;

    constructor(id: string, placa: string, pesoLeido: string, pesoPermitido: string, fechaLectura: Date) {
        this.id = id;
        this.placa = placa;
        this.pesoLeido = pesoLeido;
        this.pesoPermitido = pesoPermitido;
        this.fechaLectura = fechaLectura;
    }
}
