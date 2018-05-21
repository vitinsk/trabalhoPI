import { RotasComponent } from './rotas/rotas.component';
import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';


const APP_ROUTES : Routes = [

    { path: 'usuario', component: CadastroUsuarioComponent},
    { path: 'rotas', component: RotasComponent}
];

export const routing : ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

