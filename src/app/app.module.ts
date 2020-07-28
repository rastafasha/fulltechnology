import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';

import { HomeComponent } from './pages/index.paginas';

//shared
//import { SharedModule } from './shared/shared.modulo';
import { CarrouselComponent } from './shared/carrousel/categoria1/carrousel.component';
import { Carrousel2Component } from './shared/carrousel/categoria2/carrousel2.component';
import { Carrousel3Component } from './shared/carrousel/categoria3/carrousel3.component';
import { Carrousel4Component } from './shared/carrousel/categoria4/carrousel4.component';
import { Carrousel5Component } from './shared/carrousel/categoria5/carrousel5.component';
import { Carrousel6Component } from './shared/carrousel/categoria6/carrousel6.component';
import { Carrousel7Component } from './shared/carrousel/categoria7/carrousel7.component';

// editor
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

// pipe
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import { CategoryPipe } from './pipes/category.pipe';
import {OrderByPipe} from './pipes/order-by.pipe';
import {KeysPipe} from './pipes/keys.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';

import { CotizacionFormComponent } from './shared/cmspage/cotizacion-form/cotizacion-form.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SliderComponent } from './shared/slider/slider.component';
import { NavigationComponent } from './shared/navigation/navigation.component';

import { ModalArticulosComponent } from './shared/modal-articulos/modal-articulos.component';
import { ModalEmergenteComponent } from './shared/modal-emergente/modal-emergente.component';

// paginacion
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EscapeHtmlPipe,
    CotizacionFormComponent,
    CarrouselComponent,
    Carrousel2Component,
    Carrousel3Component,
    Carrousel4Component,
    Carrousel5Component,
    Carrousel6Component,
    Carrousel7Component,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    NavigationComponent,
    ModalArticulosComponent,
    CategoryPipe,
    OrderByPipe,
    KeysPipe,
    SortByPipe,
    ModalEmergenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
