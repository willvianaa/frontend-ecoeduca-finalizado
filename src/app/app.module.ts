import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
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
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { SegundaAtividadeComponent } from './segunda-atividade/segunda-atividade.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { LixeirafalanteComponent } from './historias-eco/lixeirafalante/lixeirafalante.component';
import { JornadadaguaComponent } from './historias-eco/jornadadagua/jornadadagua.component';
import { RecicladorEstrelaComponent } from './historias-eco/reciclador-estrela/reciclador-estrela.component';
import { JardimEsquecidoComponent } from './historias-eco/jardim-esquecido/jardim-esquecido.component';
import { AuthService } from './auth.service';
import { EcoeducaConfigComponent } from './configuracoes/ecoeduca-config/ecoeduca-config.component';
import { SobreacontaComponent } from './configuracoes/sobreaconta/sobreaconta.component';
import { UserProfileComponent } from './home-page/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    HomePageComponent,
    HistoriasEcoComponent,
    MapaEcoComponent,
    ReciclagemEcoComponent,
    DesafiosEcoComponent,
    JoaoealixeiraHistoriaComponent,
    ClubedosrecicladoresComponent,
    MariaeaarvoreComponent,
    PedroeomarComponent,
    AnaeosdesafiosComponent,
    LucaseaenergiaComponent,
    PontuacaoComponent,
    ConfiguracoesComponent,
    SegundaAtividadeComponent,
    TelaCadastroComponent,
    LixeirafalanteComponent,
    JornadadaguaComponent,
    RecicladorEstrelaComponent,
    JardimEsquecidoComponent,
    EcoeducaConfigComponent,
    SobreacontaComponent,
    UserProfileComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    GoogleMapsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
