import { UserResolverGuard } from './../guards/user-resolver.guard';
import { EditarUsuarioComponent } from './../editar-usuario/editar-usuario.component';
import { NovoUsuarioComponent } from './../novo-usuario/novo-usuario.component';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'novoUsuario',
    component: NovoUsuarioComponent,
    resolve: {
      user: UserResolverGuard
    }
  },
  {
    path: 'alterarUsuario/:id',
    component: EditarUsuarioComponent,
    resolve: {
      user: UserResolverGuard
    }
  },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
