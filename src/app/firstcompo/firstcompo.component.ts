import { AfterViewInit, Component, OnInit  } from '@angular/core';
import {ConnectorService} from '../Services/connector.service';
import { ActivitySugg } from '../models/activity-sugg';
import { CommonModule } from '@angular/common';
import { GeolocationInfo } from '../models/geolocation-info';
import Swiper from 'swiper';

@Component({
  selector: 'app-firstcompo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './firstcompo.component.html',
  styleUrl: './firstcompo.component.css',
})
export class FirstcompoComponent implements OnInit , AfterViewInit {
  GeolocationInfo: any;
  AcTsuggestions: ActivitySugg[] = [];
  constructor(private connectorService: ConnectorService) {}

  ngOnInit(): void {
    this.getWeatherStatus();
    this.getActivitySugg();
  }
  ngAfterViewInit(): void {
    const swiper = new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true,
    });
  }
  
  getWeatherStatus(): void {
    this.connectorService.getGeolocalisationInfo().subscribe(res => {
      this.GeolocationInfo = res;
      return  this.GeolocationInfo as GeolocationInfo
    });
  }

  getActivitySugg(): void {
    
      this.connectorService.getActivitySugg().subscribe((res: any) => {
        if (Array.isArray(res)) {
        this.AcTsuggestions = res.map((item: any) => {
          const activity = item.activity;
          const place = item.place;
          const title = activity.split(':')[0].trim();
          const description = activity.split(':')[1].trim();
          return { 
            Title: title,
            Description: description,
            PlaceName: place.name,
            PlaceImage: place.image,
            PlaceDescription: place.description,
            PlaceUrl: place.url
          } as ActivitySugg;
        });
      }
      });
    }
  

}
