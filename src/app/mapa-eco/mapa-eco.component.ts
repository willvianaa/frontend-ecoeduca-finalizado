import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var google: any;

@Component({
  selector: 'app-mapa-eco',
  templateUrl: './mapa-eco.component.html',
  styleUrls: ['./mapa-eco.component.css'],
  standalone: false
})
export class MapaEcoComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: -8.0476, lng: -34.8770 }; // Exemplo: Recife
  zoom = 12;
  markers: Array<{ position: google.maps.LatLngLiteral; title: string; info: string }> = [];
  suggestions: google.maps.places.AutocompletePrediction[] = [];  // Tipo correto para as sugestões

  private geocoder: google.maps.Geocoder = new google.maps.Geocoder();
  private autocompleteService: google.maps.places.AutocompleteService = new google.maps.places.AutocompleteService();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://seuprojeto.com/api/locais_coleta.php')
      .subscribe(locais => {
        this.markers = locais.map(local => ({
          position: { lat: local.latitude, lng: local.longitude },
          title: local.nome,
          info: local.descricao
        }));
      });
  }

  // Função chamada quando o usuário digita na barra de pesquisa
  onSearch(event: any): void {
    const address = event.target.value;

    if (address) {
      this.autocompleteService.getPlacePredictions({
        input: address,
        componentRestrictions: { country: 'BR' }  // Restrição para Brasil
      }, (predictions: google.maps.places.AutocompletePrediction[] | null, status: google.maps.places.PlacesServiceStatus) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
          this.suggestions = predictions;
        } else {
          this.suggestions = [];
        }
      });
    } else {
      this.suggestions = [];
    }
  }

  // Função chamada quando o usuário seleciona uma sugestão
  onSelectSuggestion(suggestion: google.maps.places.AutocompletePrediction): void {
    this.suggestions = [];  // Limpa as sugestões

    const place = suggestion.description;

    this.geocodeAddress(place);  // Geocodifica o endereço selecionado
  }

  // Função para geocodificar um endereço
  geocodeAddress(address: string): void {
    this.geocoder.geocode({ address: address }, (results: google.maps.GeocoderResult[] | null, status: google.maps.GeocoderStatus) => {
      if (status === google.maps.GeocoderStatus.OK && results) {
        this.center = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        };
        this.zoom = 15;
        // Atualiza o marcador com 'info' preenchido
        this.markers = [{
          position: this.center,
          title: address,
          info: 'Local encontrado'  // Adicionando uma descrição ou informação qualquer
        }];
      } 
    });
  }

  addresses: string[] = [
    'R. Joaquim Nabuco, 778 - Madalena, Recife - PE, 50050-290',
    'Shopping Recife R. Padre Carapuceiro, 777 - Boa Viagem, Recife - PE, 51020-900'
    // adicione outros endereços aqui
  ];

  updateMapLocation(address: string): void {
    this.geocoder.geocode({ address: address }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK && results && results.length > 0) {
        // Atualiza o centro do mapa para o endereço escolhido
        this.center = results[0].geometry.location.toJSON();
        
        // Atualiza o marcador com 'info' preenchido
        this.markers = [{
          position: this.center,
          title: address,
          info: 'Local encontrado'  // Adicionando uma descrição ou informação qualquer
        }];
        this.zoom = 15;
      } else {
        alert('Erro ao localizar o endereço ou endereço não encontrado.');
      }
    });
  }

  loadMapMarkers(): void {
    this.http.get<any[]>('https://seuprojeto.com/api/locais_coleta.php')
      .subscribe(locais => {
        this.markers = locais.map(local => ({
          position: { lat: local.latitude, lng: local.longitude },
          title: local.nome,
          info: local.descricao
        }));
      });
  }
}
