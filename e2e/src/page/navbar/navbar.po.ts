import { by, element } from 'protractor';

export class NavbarPage {
    linkAgente = element(by.xpath('/html/body/app-root/app-navbar/nav/div/div/div/a[1]'));
    linkCategoria = element(by.xpath('/html/body/app-root/app-navbar/nav/div/div/div/a[2]'));
    linkComparendo = element(by.xpath('/html/body/app-root/app-navbar/nav/div/div/div/a[3]'));

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
