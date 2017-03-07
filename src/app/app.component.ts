import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/pages';
import { Page2 } from '../pages/pages';
import { LoginPage } from '../pages/pages';
import { ListaDenuncePage } from '../pages/pages';
import { LeMieDenuncePage } from '../pages/pages';
import { MappaEvasoriPage } from '../pages/pages';
import { NuovaDenunciaPage } from '../pages/pages';
import { StatistichePage } from '../pages/pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  activePage:any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Page One', component: Page1 },
      { title: 'Page Two', component: Page2 },
      { title: 'Lista Denunce', component: ListaDenuncePage },
      { title: 'Le Mie Denuncie', component: LeMieDenuncePage },
      { title: 'Nuova Denuncia', component: NuovaDenunciaPage },
      { title: 'Mappa Evasori', component: MappaEvasoriPage },
      { title: 'Statistiche', component: StatistichePage }
    ];

    this.activePage = this.pages[0];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

  checkActivePage(page){
    return page == this.activePage;
  }
}
