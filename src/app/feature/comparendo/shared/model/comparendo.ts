export class Comparendo {
    id: string;
    posiblesInfractoresId: string;
    agentesId: string;
    categoriasId: string;
    fecha: Date;
    isDeleting = false;

    constructor(id: string, posiblesInfractoresId: string, agentesId: string, categoriasId: string, fecha: Date) {
        this.id = id;
        this.posiblesInfractoresId = posiblesInfractoresId;
        this.agentesId = agentesId;
        this.categoriasId = categoriasId;
        this.fecha = fecha;
        this.isDeleting = false;
    }
}
