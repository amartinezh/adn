import { by, element } from 'protractor';

export class AgenteAddPage {

    // Elementos Crear Agente
    private linkBotonGuardarAgente = element(by.id('linkBotonGuardarAgente'));
    private linkBotonCancelarOperacion = element(by.id('linkBotonCancelarOperacion'));
    private linkInputIdCrearAgente = element(by.id('linkInputIdCrearAgente'));
    private linkInputNombreCrearAgente = element(by.id('linkInputNombreCrearAgente'));

    // Métodos
    // Metodos de accion para Crear Agente
    async clickBotonGuardarAgente() {
        await this.linkBotonGuardarAgente.click();
    }

    async ingresarIdCrearAgente(IdAgente) {
        await this.linkInputIdCrearAgente.sendKeys(IdAgente);
    }

    async ingresarNombreCrearAgente(NombreAgente) {
        await this.linkInputNombreCrearAgente.sendKeys(NombreAgente);
    }

    async clickBotonCancelarOperacion() {
        await this.linkBotonCancelarOperacion.click();
    }

    async getBotonCancelarHabilitado() {
        return this.linkBotonCancelarOperacion.isEnabled();
    }

    async getBotonGuardarHabilitado() {
        await this.linkBotonGuardarAgente.isEnabled();
    }
}
