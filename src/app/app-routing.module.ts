import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HistoriasEcoComponent } from './historias-eco/historias-eco.component';
import { MapaEcoComponent } from './mapa-eco/mapa-eco.component';
import { ReciclagemEcoComponent } from './reciclagem-eco/reciclagem-eco.component';
import { DesafiosEcoComponent } from './desafios-eco/desafios-eco.component';
import { JoaoealixeiraHistoriaComponent } from './historias-eco/joaoealixeira-historia/joaoealixeira-historia.component';
import { ClubedosrecicladoresComponent } from './historias-eco/clubedosrecicladores/clubedosrecicladores.component';
import { MariaeaarvoreComponent } from './historias-eco/mariaeaarvore/mariaeaarvore.component';
import { PedroeomarComponent } from './historias-eco/pedroeomar/pedroeomar.component';
import { AnaeosdesafiosComponent } from './historias-eco/anaeosdesafios/anaeosdesafios.component';
import { LucaseaenergiaComponent } from './historias-eco/lucaseaenergia/lucaseaenergia.component';
import { PontuacaoComponent } from './pontuacao/pontuacao.component';
import { SegundaAtividadeComponent } from './segunda-atividade/segunda-atividade.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { LixeirafalanteComponent } from './historias-eco/lixeirafalante/lixeirafalante.component';
import { JornadadaguaComponent } from './historias-eco/jornadadagua/jornadadagua.component';
import { JardimEsquecidoComponent } from './historias-eco/jardim-esquecido/jardim-esquecido.component';
import { RecicladorEstrelaComponent } from './historias-eco/reciclador-estrela/reciclador-estrela.component';
import { EcoeducaConfigComponent } from './configuracoes/ecoeduca-config/ecoeduca-config.component';
import { SobreacontaComponent } from './configuracoes/sobreaconta/sobreaconta.component';
import { UserProfileComponent } from './home-page/user-profile/user-profile.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component:  TelaLoginComponent}, // Rota inicial (login)
  { path: 'login', component: TelaCadastroComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard]},
  { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard]},
  { path: 'histórias', component: HistoriasEcoComponent, canActivate: [AuthGuard]},
  { path: 'joaoealixeira', component: JoaoealixeiraHistoriaComponent, canActivate: [AuthGuard]},
  { path: 'cluberecicladores', component: ClubedosrecicladoresComponent, canActivate: [AuthGuard]},
  { path: 'maria-arvore', component: MariaeaarvoreComponent, canActivate: [AuthGuard]},
  { path: 'ana-desafios', component: AnaeosdesafiosComponent, canActivate: [AuthGuard]},
  { path: 'pedro-mar', component: PedroeomarComponent, canActivate: [AuthGuard]},
  { path: 'lucas-energia', component: LucaseaenergiaComponent, canActivate: [AuthGuard]},
  { path: 'lixeira-falante', component: LixeirafalanteComponent, canActivate: [AuthGuard]},
  { path: 'jornada-agua', component: JornadadaguaComponent, canActivate: [AuthGuard]},
  { path: 'reciclador-estrela', component: RecicladorEstrelaComponent, canActivate: [AuthGuard]},
  { path: 'jardim-esquecido', component: JardimEsquecidoComponent, canActivate: [AuthGuard]},
  { path: 'mapa', component: MapaEcoComponent, canActivate: [AuthGuard]},
  { path: 'reciclagem', component: ReciclagemEcoComponent, canActivate: [AuthGuard] },
  { path: 'desafios', component: DesafiosEcoComponent, canActivate: [AuthGuard] },
  { path: 'pontuacao', component: PontuacaoComponent, canActivate: [AuthGuard] },
  { path: 'segunda-atividade', component: SegundaAtividadeComponent, canActivate: [AuthGuard] },
  { path: 'ecoeduca-config', component: EcoeducaConfigComponent, canActivate: [AuthGuard]},
  { path: 'sobre-conta', component: SobreacontaComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
