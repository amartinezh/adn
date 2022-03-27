export class Categoria {
    id: string;
    descripcion: string;
    isDeleting: boolean = false;

    constructor(id: string, descripcion: string) {
        this.id = id;
        this.descripcion = descripcion;
        this.isDeleting = false;
    }
}
