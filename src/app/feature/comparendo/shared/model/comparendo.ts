export class Comparendo {
    id: string;
    posibles_infractoresId: string;
    agentesId: string;
    categoriasId: string;
    fecha: Date;
    isDeleting = false;

    constructor(id: string, posibles_infractoresId: string, agentesId: string, categoriasId: string, fecha: Date) {
        this.id = id;
        this.posibles_infractoresId = posibles_infractoresId;
        this.agentesId = agentesId;
        this.categoriasId = categoriasId;
        this.fecha = fecha;
        this.isDeleting = false;
    }
}
