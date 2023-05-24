import { Injectable } from '@angular/core';
import { Bike } from '../models/bike';
import { STATIONS } from '../models/stations';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BikeserviceService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getBikes(): Observable <Bike[]> {

    const apiKey = '4874233c82831af214beb9a21daa23f0d4340ed8';
    const endpointUrl= `https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=${apiKey};`;
    const bikestations = of(STATIONS);
    this.messageService.add('BikeService: fetched bikestations')
    return this.http.get<Bike[]>(endpointUrl).pipe();

}

getBike(num: number) : Observable<Bike>{

  const apiKey = '4874233c82831af214beb9a21daa23f0d4340ed8';
  const endpointUrl= `https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=${apiKey}/${num};`;
  this.messageService.add(`bikeService: fetched ${num} from api`);
  return this.http.get<Bike>(endpointUrl).pipe();

}

}

// const apiKey = '6b8ff90c67fe6387d7ab6ef729f5be50';
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`;


// const apiKey = '4874233c82831af214beb9a21daa23f0d4340ed8';
// const url = `https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=${apiKey}`;




// <a routerLink="/detail/{{bikestation.id}}">

//NEED TO UPLOAD A GITHUB LINK TO THE PROJECT AND UPLOAD A SHORT YOUTUBE VIDEO OF THE PROGRAM RUNNING