import { Agente } from '@shared/models/Agente/agente';
import { Categoria } from '@shared/models/Categoria/categoria';
import { PosiblesInfractor } from './posibles_infractores';

export class Comparendo {
    id: string;
    posiblesInfractores: PosiblesInfractor;
    agentesId: Agente;
    categoriasId: Categoria;
    fecha: Date;
    valor: number;
    isDeleting = false;

    constructor(id: string, posiblesInfractores: PosiblesInfractor, agentesId: Agente,
                categoriasId: Categoria, fecha: Date, valor: number) {
        this.id = id;
        this.posiblesInfractores = posiblesInfractores;
        this.agentesId = agentesId;
        this.categoriasId = categoriasId;
        this.fecha = fecha;
        this.valor = valor;
        this.isDeleting = false;
    }
}
