import { Component, OnInit } from '@angular/core';
import { Bike } from 'src/app/models/bike';
import { STATIONS } from 'src/app/models/stations';
import { BikeserviceService } from 'src/app/services/bikeservice.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-bikestations',
  templateUrl: './bikestation.component.html',
  styleUrls: ['./bikestation.component.css']
})
export class BikestationComponent implements OnInit {

  constructor(private bikeService: BikeserviceService, private messageService: MessageService) {}

  ngOnInit(): void {
    
    this.getBikes();
    
  }

  //title = 'Bike Stations:';

  bike: Bike = {
    num: 32,
    address: 'Jeff'
  }

  bikestation?: Bike[];

  getBikes(): void {
    //this.bikestation = this.bikeService.getBikes();

    this.bikeService.getBikes().subscribe(bikestation => this.bikestation=bikestation);
  }

  // selectedBike?: Bike;

  // onSelect(bike:Bike): void{

  //   this.selectedBike = bike;

  //   this.messageService.add(`BikestaionComponent: Selected bike num=${bike.num}`)

  // }

}