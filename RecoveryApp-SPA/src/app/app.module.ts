import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { AppareilComponent } from './components/appareil/appareil.component';
import { AppareilViewComponent } from './components/appareil-view/appareil-view.component';
import { SingleAppareilComponent } from './components/single-appareil/single-appareil.component';
import { AppareilService } from './_services/appareil.service';
import { AuthService } from './_services/auth.service';
import { AuthComponent } from './components/auth/auth.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { NavLinkService } from './_services/nav-link.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AppareilComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    AuthComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AuthComponent, pathMatch: 'full' },   // localhost:port
      // { path: '', component: HomeComponent, pathMatch: 'full' },   // localhost:port
      // { path: '', component: AppareilViewComponent},   // localhost:port
      // { path: 'counter', component: CounterComponent },
      // { path: 'fetch-data', component: FetchDataComponent },
      { path: 'appareils', component: AppareilViewComponent },      // localhost:port/appareils
      // { path: 'appareils/:id', component: SingleAppareilComponent },      // localhost:port/appareils
      { path: 'auth', component: AuthComponent },
      { path: 'not-found', component: FourOhFourComponent },
      { path: '**', redirectTo: 'not-found' }
    ])
  ],
  providers: [
    AppareilService,
    AuthService,
    NavLinkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
