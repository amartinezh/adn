export class PosiblesInfractor {
    id: string;
    placa: string;
    peso_leido: string;
    peso_permitido: string;

    constructor(id: string, placa: string, peso_leido: string, peso_permitido: string) {
        this.id = id;
        this.placa = placa;
        this.peso_leido = peso_leido;
        this.peso_permitido = peso_permitido;
    }
}
