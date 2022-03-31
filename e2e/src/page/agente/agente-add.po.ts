import { browser, by, element } from 'protractor';

export class AgenteAddPage {
    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
      }
    // Elementos Crear Agente
    private linkBotonCrearAgente = element(by.id('linkBotonCrearAgente'));
    private linkBotonCancelarOperacion = element(by.id('linkBotonCancelarOperacion'));
    private linkInputIdCrearAgente = element(by.id('linkInputIdCrearAgente'));
    private linkInputNombreCrearAgente = element(by.id('linkInputNombreCrearAgente'));

    // Métodos
    // Metodos de accion para Crear Agente
    async clickBotonCrearAgente() {
        await this.linkBotonCrearAgente.click();
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
}
