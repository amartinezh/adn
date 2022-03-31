import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkAgente = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkCategoria = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));
    linkComparendo = element(by.xpath('/html/body/app-root/app-navbar/nav/a[4]'));

    async clickBotonAgente() {
        await this.linkAgente.click();
    }

    async clickBotonCategoria() {
        await this.linkCategoria.click();
    }

    async clickBotonComparendo() {
        await this.linkComparendo.click();
    }
}
