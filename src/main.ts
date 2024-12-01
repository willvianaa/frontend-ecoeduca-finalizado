import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

function loadGoogleMapsScript() {
  const script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAH3ogbY6FpwpozNkN4ah_tO_cyFFZtlJI&libraries=places';
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

loadGoogleMapsScript();

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
  
