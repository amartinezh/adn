import { by, element } from 'protractor';

export class CategoriaPage {

    // Acciones Listar Categorias
    private listaCategorias = element.all(by.id('linkBodyListaCategorias'));
    linkCategoria = element(by.xpath('/html/body/app-root/app-navbar/div/button/nav/div/ul/li/a[2]'));

    // Elementos Listar Categoria (CRUD)
    private linkBotonEditarCategoria = element(by.id('linkEditarCategoria'));
    private linkBotonEliminarCategoria = element(by.id('linkEliminarCategoria'));

    // Elementos Crear Categoria
    private linkBotonCrearCategoria = element(by.id('linkAgregarCategoria'));
    private linkBotonCancelarOperacion = element(by.id('linkBotonCancelarOperacion'));
    private linkInputIdCrearCategoria = element(by.id('linkInputIdCrearCategoria'));
    private linkInputNombreCrearCategoria = element(by.id('linkInputNombreCrearCategoria'));

    // Métodos
    // Métodos para agregar un agente
    async clickBotonListarCategorias() {
        await this.linkCategoria.click();
    }

    async contarCategorias() {
        return (await this.listaCategorias).length;
    }

    // Metodos de accion para Crear Categoria
    async clickBotonCrearCategoria() {
        await this.linkBotonCrearCategoria.click();
    }

    async ingresarIdCrearCategoria(IdCategoria) {
        await this.linkInputIdCrearCategoria.sendKeys(IdCategoria);
    }

    async ingresarNombreCrearCategoria(NombreCategoria) {
        await this.linkInputNombreCrearCategoria.sendKeys(NombreCategoria);
    }

    async clickBotonCancelarOperacion() {
        await this.linkBotonCancelarOperacion.click();
    }

    // Metodos para Editar Categoria
    async clickBotonEditarCategoria() {
        await this.linkBotonEditarCategoria.click();
    }

    // Metodos para Eliminar Categoria
    async clickBotonEliminarCategoria() {
        await this.linkBotonEliminarCategoria.click();
    }
}
