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
  testing = true;
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
      console.log("geo =", this.GeolocationInfo);
      return  this.GeolocationInfo as GeolocationInfo
    });
  }

  getActivitySugg(): void {
    if (this.testing){
      this.AcTsuggestions.push(new ActivitySugg("Activity 1", "Description for Activity 1"));
      this.AcTsuggestions.push(new ActivitySugg("Activity 2", "Description for Activity 2"));
      this.AcTsuggestions.push(new ActivitySugg("Activity 3", "Description for Activity 3"));
      this.AcTsuggestions.push(new ActivitySugg("Activity 4", "Description for Activity 4"));
      this.AcTsuggestions.push(new ActivitySugg("Activity 5", "Description for Activity 5"));
    }else {
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
        console.log("Suggestions:", this.AcTsuggestions);
      }
      });
    }
  }

}
