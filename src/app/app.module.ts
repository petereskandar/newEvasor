import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Page1 } from '../pages/pages';
import { Page2 } from '../pages/pages';
import { LoginPage } from '../pages/pages';
import { ListaDenuncePage } from '../pages/pages';
import { LeMieDenuncePage } from '../pages/pages';
import { MappaEvasoriPage } from '../pages/pages';
import { NuovaDenunciaPage } from '../pages/pages';
import { StatistichePage } from '../pages/pages';


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    ListaDenuncePage,
    LeMieDenuncePage,
    MappaEvasoriPage,
    NuovaDenunciaPage,
    StatistichePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    ListaDenuncePage,
    LeMieDenuncePage,
    MappaEvasoriPage,
    NuovaDenunciaPage,
    StatistichePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
