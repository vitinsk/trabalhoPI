import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {InplaceModule} from 'primeng/inplace';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { routing } from './app.routing';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { RotasComponent } from './rotas/rotas.component';
import {GMapModule} from 'primeng/gmap'; 
import {PaginatorModule} from 'primeng/paginator';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import {DialogModule} from 'primeng/dialog';
@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    RotasComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    InplaceModule,
    AngularFontAwesomeModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    routing,
    TableModule,
    FormsModule,
    GMapModule,
    PaginatorModule,
    AgmCoreModule.forRoot({
      apiKey: // colocar chave do maps API
    }),
    AgmDirectionModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
