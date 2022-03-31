import { browser, by, element } from 'protractor';

export class AgentePage {
    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
      }
    // Acciones Listar Agentes
    private listaAgentes = element.all(by.id('linkBodyListaAgentes'));
    linkAgente = element(by.xpath('/html/body/app-root/app-navbar/div/button/nav/div/ul/li/a[2]'));

    // Elementos Listar Agente (CRUD)
    private linkBotonEditarAgente = element(by.id('linkEditarAgente'));
    private linkBotonEliminarAgente = element(by.id('linkEliminarAgente'));

    // Elementos Crear Agente
    private linkBotonCrearAgente = element(by.id('linkBotonCrearAgente'));
    private linkBotonCancelarOperacion = element(by.id('linkBotonCancelarOperacion'));
    private linkInputIdCrearAgente = element(by.id('linkInputIdCrearAgente'));
    private linkInputNombreCrearAgente = element(by.id('linkInputNombreCrearAgente'));

    // Métodos
    // Métodos para agregar un agente
    async clickBotonListarAgentes() {
        await this.linkAgente.click();
    }

    async contarAgentes() {
        return (await this.listaAgentes).length;
    }

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

    // Metodos para Editar Agente
    async clickBotonEditarAgente() {
        await this.linkBotonEditarAgente.click();
    }

    // Metodos para Eliminar Agente
    async clickBotonEliminarAgente() {
        await this.linkBotonEliminarAgente.click();
    }
}
