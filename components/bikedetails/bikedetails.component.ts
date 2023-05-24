import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bike } from 'src/app/models/bike';
import { BikeserviceService } from 'src/app/services/bikeservice.service';

@Component({
  selector: 'app-bikedetails',
  templateUrl: './bikedetails.component.html',
  styleUrls: ['./bikedetails.component.css']
})
export class BikedetailsComponent implements OnInit {
@Input() bike? : Bike;


  constructor(
    private route:ActivatedRoute,
    private bikeService:BikeserviceService,
    private location: Location
  ) {}

  ngOnInit(): void {

    this.getBike();
    
  }

  getBike() : void {
    const num = Number(this.route.snapshot.paramMap.get('num'));
    this.bikeService.getBike(num).subscribe(bike=>this.bike=bike);

  }

}


  // const apiKey = '4874233c82831af214beb9a21daa23f0d4340ed8';
  // const url = `https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=${apiKey}`;


