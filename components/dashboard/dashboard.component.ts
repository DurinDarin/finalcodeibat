import { Component, OnInit } from '@angular/core';
import { Bike } from 'src/app/models/bike';
import { BikeserviceService } from 'src/app/services/bikeservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bikestation: Bike[] = [];

  constructor(private bikeService: BikeserviceService ){}

  ngOnInit(): void {
    this.getBikes()
  }

  getBikes(): void{

    this.bikeService.getBikes().subscribe(bikestation => this.bikestation = bikestation.slice(1,5))
    
  }


}
