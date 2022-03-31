import { AppPage } from './app.po';

describe('Bascula App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Debe mostrar el titulo de la pagina', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('ADN Ceiba');
  });

});
