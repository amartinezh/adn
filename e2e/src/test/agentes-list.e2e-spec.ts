import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';

describe('Agente E2E', () => {
    let page: AppPage;
    let navBar: NavbarPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
    });

    it('Deberia eliminar agentes', () => {
        page.navigateTo();
        navBar.clickBotonAgente();
    });


});
