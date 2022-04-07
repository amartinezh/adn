import { by, element } from 'protractor';

export class AgenteAddPage {

    // Elementos Crear Agente
    private linkMEnsaje = element(by.buttonText('OK'));
    private linkBotonGuardarAgente = element(by.id('linkBotonGuardarAgente'));
    private linkBotonCancelarOperacion = element(by.id('linkBotonCancelarOperacion'));
    private linkInputIdCrearAgente = element(by.id('linkInputIdCrearAgente'));
    private linkInputNombreCrearAgente = element(by.id('linkInputNombreCrearAgente'));
    private linkInputTelefonoCrearAgente = element(by.id('linkInputTelefonoCrearAgente'));
    private linkInputHoraInicioCrearAgente = element(by.id('linkInputHoraInicioCrearAgente'));
    private linkInputHoraFinCrearAgente = element(by.id('linkInputHoraFinCrearAgente'));

    // Métodos
    // Metodos de accion para Crear Agente
    async clickBotonGuardarAgente() {
        await this.linkBotonGuardarAgente.click();
    }

    async getlinkMensaje() {
        await this.linkMEnsaje.isPresent();
    }

    async ingresarIdCrearAgente(IdAgente) {
        await this.linkInputIdCrearAgente.sendKeys(IdAgente);
    }

    async ingresarNombreCrearAgente(NombreAgente) {
        await this.linkInputNombreCrearAgente.sendKeys(NombreAgente);
    }

    async ingresarTelefonoCrearAgente(TelefonoAgente) {
        await this.linkInputTelefonoCrearAgente.sendKeys(TelefonoAgente);
    }

    async ingresarHoraInicioCrearAgente(HoraInicioAgente) {
        await this.linkInputHoraInicioCrearAgente.sendKeys(HoraInicioAgente);
    }

    async ingresarHoraFinCrearAgente(HoraFinCrearAgente) {
        await this.linkInputHoraFinCrearAgente.sendKeys(HoraFinCrearAgente);
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
