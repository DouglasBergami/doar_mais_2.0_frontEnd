import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CampanhaPageModule } from '../pages/campanha/campanha.module';
import { CidadeProvider } from '../providers/cidade/cidade';
import { HttpClientModule } from '@angular/common/http';
import { HemocentroPage } from '../pages/hemocentro/hemocentro';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HemocentroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CampanhaPageModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HemocentroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CidadeProvider
  ]
})
export class AppModule {}
