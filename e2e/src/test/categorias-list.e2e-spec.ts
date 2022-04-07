import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { CategoriaPage } from '../page/categoria/categoria.po';
import { CategoriaAddPage } from '../page/categoria/categoria-add.po';

describe('Categoria E2E', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let pagCategoria: CategoriaPage;
    let pagAddCategoria: CategoriaAddPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        pagCategoria = new CategoriaPage();
        pagAddCategoria = new CategoriaAddPage();
    });

    it('Deberia navegar al CRUD categorias', () => {
        page.navigateTo();
        navBar.clickBotonCategoria();
    });

    it('Deberia navegar hasta el componente para agregar una categoria', () => {
        page.navigateTo();
        navBar.clickBotonCategoria();
        pagCategoria.clickBotonCrearCategoria();
    });

    it('Deberia estar habilitado el boton de cancelar al agregar un nuevo agente', () => {
        page.navigateTo();
        navBar.clickBotonCategoria();
        pagCategoria.clickBotonCrearCategoria();
        expect(pagAddCategoria.getBotonCancelarHabilitado()).toBeTruthy();
    });

    it('Deberia guardar una categoria', () => {
        page.navigateTo();
        navBar.clickBotonCategoria();
        pagCategoria.clickBotonCrearCategoria();
        pagAddCategoria.ingresarIdCrearCategoria('007');
        pagAddCategoria.ingresarDescripcionCrearCategoria('Categoria nueva');
        pagAddCategoria.clickBotonGuardarCategoria();
        const res = pagAddCategoria.getlinkMensaje();
        expect(res).toBeUndefined();
    });
});
