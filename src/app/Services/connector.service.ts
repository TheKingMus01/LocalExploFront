import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  constructor(private httpClient:HttpClient) {}

  getGeolocalisationInfo(){
    return this.httpClient.get('https://localhost:44393/api/LocalExplorer/geolocation');
  }
  getActivitySugg(){
    return this.httpClient.get('https://localhost:44393/api/LocalExplorer/ActivitySuggestions');
  }
}
