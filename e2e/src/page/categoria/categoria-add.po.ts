import { by, element } from 'protractor';

export class CategoriaAddPage {

    // Elementos Crear Categorias
    private linkMEnsaje = element(by.buttonText('OK'));
    private linkBotonGuardarCategoria = element(by.id('linkBotonGuardarCategoria'));
    private linkBotonCancelarOperacion = element(by.id('linkBotonCancelarOperacion'));
    private linkInputIdCrearCategoria = element(by.id('linkInputIdCrearCategoria'));
    private linkInputDescripcionCrearCategoria = element(by.id('linkInputDescripcionCrearCategoria'));

    // Métodos
    // Metodos de accion para Crear Categoria
    async clickBotonGuardarCategoria() {
        await this.linkBotonGuardarCategoria.click();
    }

    async getlinkMensaje() {
        await this.linkMEnsaje.isPresent();
    }

    async ingresarIdCrearCategoria(IdCategoria) {
        await this.linkInputIdCrearCategoria.sendKeys(IdCategoria);
    }

    async ingresarDescripcionCrearCategoria(DescripcionCategoria) {
        await this.linkInputDescripcionCrearCategoria.sendKeys(DescripcionCategoria);
    }

    async clickBotonCancelarOperacion() {
        await this.linkBotonCancelarOperacion.click();
    }

    async getBotonCancelarHabilitado() {
        return this.linkBotonCancelarOperacion.isEnabled();
    }

    async getBotonGuardarHabilitado() {
        await this.linkBotonGuardarCategoria.isEnabled();
    }
}
