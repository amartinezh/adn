import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { AgentePage } from '../page/agente/agente.po';
import { AgenteAddPage } from '../page/agente/agente-add.po';

describe('Agente E2E', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let pagAgente: AgentePage;
    let pagAddAgente: AgenteAddPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        pagAgente = new AgentePage();
        pagAddAgente = new AgenteAddPage();
    });

    it('Deberia eliminar agentes', () => {
        page.navigateTo();
        navBar.clickBotonAgente();
    });

    it('Deberia estar desabilitado el boton de guardar', () => {
        navBar.clickBotonAgente();
        pagAgente.clickBotonCrearAgente();
        expect(pagAddAgente.getBotonCancelarHabilitado()).toBeFalse();
    });

    
});
