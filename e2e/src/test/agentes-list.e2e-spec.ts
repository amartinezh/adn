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

    it('Deberia navegar al CRUD agentes', () => {
        page.navigateTo();
        navBar.clickBotonAgente();
    });

    it('Deberia navegar hasta el componente para agregar un agente', () => {
        page.navigateTo();
        navBar.clickBotonAgente();
        pagAgente.clickBotonCrearAgente();
    });

    it('Deberia estar habilitado el boton de cancelar al agregar un nuevo agente', () => {
        page.navigateTo();
        navBar.clickBotonAgente();
        pagAgente.clickBotonCrearAgente();
        expect(pagAddAgente.getBotonCancelarHabilitado()).toBeTruthy();
    });

    it('Deberia guardar un agente', () => {
        page.navigateTo();
        navBar.clickBotonAgente();
        pagAgente.clickBotonCrearAgente();
        pagAddAgente.ingresarIdCrearAgente('77');
        pagAddAgente.ingresarNombreCrearAgente('Super Agente 77');
        pagAddAgente.clickBotonGuardarAgente();
        expect(pagAddAgente.getBotonCancelarHabilitado()).toBeTruthy();
    });
});
