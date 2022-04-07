import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ComparendoPage } from '../page/comparendo/comparendo.po';
import { ComparendoAddPage } from '../page/comparendo/comparendo-add.po';

describe('Comparendo E2E', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let pagComparendo: ComparendoPage;
    let pagAddComparendo: ComparendoAddPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        pagComparendo = new ComparendoPage();
        pagAddComparendo = new ComparendoAddPage();
    });

    it('Deberia navegar a la gestión de comparendo', () => {
        page.navigateTo();
        navBar.clickBotonComparendo();
    });

    it('Deberia navegar hasta el componente para registrar un comparendo', () => {
        page.navigateTo();
        navBar.clickBotonComparendo();
        pagComparendo.clickBotonCrearComparendo();
    });

    it('Deberia estar habilitado el boton de cancelar al registrar un comparendo', () => {
        page.navigateTo();
        navBar.clickBotonComparendo();
        pagComparendo.clickBotonCrearComparendo();
        expect(pagAddComparendo.getBotonCancelarHabilitado()).toBeTruthy();
    });

    it('Deberia registrar un comparendo', () => {
        page.navigateTo();
        navBar.clickBotonComparendo();
        pagComparendo.clickBotonCrearComparendo();
        pagAddComparendo.ingresarIdCrearComparendo('1');
        pagAddComparendo.ingresarInputposiblesInfractoresCrearComparendo('1');
        pagAddComparendo.ingresarInputcategoriasIdComparendo('1');
        pagAddComparendo.ingresarInputagentesIdCrearComparendo('1');
        pagAddComparendo.ingresarInputValorCrearComparendo(1220);
        pagAddComparendo.clickBotonGuardarComparendo();
        const res = pagAddComparendo.getlinkMensaje();
        expect(res).toBeUndefined();
    });
});
