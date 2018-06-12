import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {AccordionModule} from 'primeng/accordion';
import {DataTableModule} from 'primeng/datatable';
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
import { CadastroVeiculoComponent } from './cadastro-veiculo/cadastro-veiculo.component';
import { FuncionarioService } from './funcionario.service';
@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    RotasComponent,
    CadastroVeiculoComponent
  ],
  imports: [
    HttpClientModule,
    DataTableModule,
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
      apiKey: 'AIzaSyBFP36tQwX3Md60oPJ-cb6l8FcB_igPry8'
    }),
    AgmDirectionModule,
    DialogModule
  ],
  providers: [FuncionarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
