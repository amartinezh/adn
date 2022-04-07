import { by, element } from 'protractor';

export class ComparendoAddPage {

    // Elementos Crear Comparendo
    private linkMEnsaje = element(by.buttonText('OK'));
    private linkBotonGuardarComparendo = element(by.id('linkBotonGuardarComparendo'));
    private linkBotonCancelarOperacion = element(by.id('linkBotonCancelarOperacion'));
    private linkInputIdCrearComparendo = element(by.id('linkInputIdCrearComparendo'));
    private linkInputposiblesInfractoresCrearComparendo = element(by.id('linkInputposiblesInfractoresCrearComparendo'));
    private linkInputagentesIdCrearComparendo = element(by.id('linkInputagentesIdCrearComparendo'));
    private linkInputcategoriasIdComparendo = element(by.id('linkInputcategoriasIdComparendo'));
    private linkInputValorCrearComparendo = element(by.id('linkInputValorCrearComparendo'));

    // Métodos
    // Metodos de accion para Crear Comparendo
    async clickBotonGuardarComparendo() {
        await this.linkBotonGuardarComparendo.click();
    }

    async getlinkMensaje() {
        await this.linkMEnsaje.isPresent();
    }

    async ingresarIdCrearComparendo(IdComparendo) {
        await this.linkInputIdCrearComparendo.sendKeys(IdComparendo);
    }

    async ingresarInputposiblesInfractoresCrearComparendo(PosibleInfractor) {
        await this.linkInputposiblesInfractoresCrearComparendo.sendKeys(PosibleInfractor);
    }

    async ingresarInputagentesIdCrearComparendo(AgenteComparendo) {
        await this.linkInputagentesIdCrearComparendo.sendKeys(AgenteComparendo);
    }

    async ingresarInputcategoriasIdComparendo(CategoriaComparendo) {
        await this.linkInputcategoriasIdComparendo.sendKeys(CategoriaComparendo);
    }

    async ingresarInputValorCrearComparendo(HoraFinCrearComparendo) {
        await this.linkInputValorCrearComparendo.sendKeys(HoraFinCrearComparendo);
    }
    async clickBotonCancelarOperacion() {
        await this.linkBotonCancelarOperacion.click();
    }

    async getBotonCancelarHabilitado() {
        return this.linkBotonCancelarOperacion.isEnabled();
    }

    async getBotonGuardarHabilitado() {
        await this.linkBotonGuardarComparendo.isEnabled();
    }
}
