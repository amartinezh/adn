import { by, element } from 'protractor';

export class ComparendoPage {

    // Acciones Listar Comparendos
    private listaComparendos = element.all(by.id('linkBodyListaComparendos'));
    linkComparendo = element(by.xpath('/html/body/app-root/app-navbar/div/button/nav/div/ul/li/a[2]'));

    // Elementos Listar Comparendo (CRUD)
    private linkBotonEditarComparendo = element(by.id('linkEditarComparendo'));
    private linkBotonEliminarComparendo = element(by.id('linkEliminarComparendo'));

    // Elementos Crear Comparendo
    private linkBotonCrearComparendo = element(by.id('linkAgregarComparendo'));

    // Métodos
    // Métodos para agregar un agente
    async clickBotonListarComparendos() {
        await this.linkComparendo.click();
    }

    async contarComparendos() {
        return (await this.listaComparendos).length;
    }

    // Metodos de accion para Crear Comparendo
    async clickBotonCrearComparendo() {
        await this.linkBotonCrearComparendo.click();
    }

    // Metodos para Editar Comparendo
    async clickBotonEditarComparendo() {
        await this.linkBotonEditarComparendo.click();
    }

    // Metodos para Eliminar Comparendo
    async clickBotonEliminarComparendo() {
        await this.linkBotonEliminarComparendo.click();
    }
}
